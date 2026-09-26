#!/usr/bin/env python3
"""Sharded variant of crawl_recalls_longtail: SHARD_I/SHARD_N env, own output file."""
import json, os, sys, time, urllib.request, urllib.parse

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
HERE = os.path.dirname(__file__)
AGG = os.path.abspath(os.path.join(HERE, "..", "data", "complaints-agg.json"))
TOP = os.path.abspath(os.path.join(HERE, "..", "data", "recalls-top80.json"))
MAIN = os.path.abspath(os.path.join(HERE, "..", "data", "recalls-all.json"))
I, N = int(os.environ.get("SHARD_I", "0")), int(os.environ.get("SHARD_N", "1"))
OUT = os.path.abspath(os.path.join(HERE, "..", "data", f"recalls-shard{I}.json"))

def key(y, m, mo): return f"{y}|{m}|{mo}"

def get(url, tries=3):
    import urllib.error
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "carc-data-bank/1.0"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 400:
                return {"Count": 0, "results": [], "http400": True}
            if i == tries - 1:
                print(f"FAIL {url}: {e}", file=sys.stderr)
                return None
            time.sleep(2 * (i + 1))
        except Exception as e:
            if i == tries - 1:
                print(f"FAIL {url}: {e}", file=sys.stderr)
                return None
            time.sleep(2 * (i + 1))

def main():
    agg = json.load(open(AGG))
    top = json.load(open(TOP))
    covered = {key(t["year"], t["make"], t["model"]) for t in top}
    combos = []
    for c in agg:
        y = str(c.get("year", ""))
        if not y.isdigit() or not (2015 <= int(y) <= 2026):
            continue
        k = key(y, c["make"], c["model"])
        if k not in covered:
            combos.append((y, c["make"], c["model"], k))
    data = {}
    if os.path.exists(OUT):
        data = json.load(open(OUT))
    elif os.path.exists(MAIN):
        data = json.load(open(MAIN))
    todo = [c for c in combos if c[3] not in data]
    todo = todo[I::N]
    print(f"shard {I}/{N}: {len(todo)} to go", flush=True)
    t0 = time.time()
    for n, (y, make, model, k) in enumerate(todo, 1):
        q = urllib.parse.urlencode({"make": make, "model": model, "modelYear": y})
        res = get(f"{BASE}?{q}")
        if res is not None:
            camps = [
                {
                    "campaign": c.get("NHTSACampaignNumber"),
                    "component": c.get("Component"),
                    "summary": (c.get("Summary") or "")[:500],
                    "date": c.get("ReportReceivedDate"),
                }
                for c in res.get("results", [])
            ]
            entry = {"recalls": res.get("Count", 0), "campaigns": camps}
            if res.get("http400"):
                entry["http400"] = True
            data[k] = entry
        if n % 50 == 0:
            json.dump(data, open(OUT, "w"))
            print(f"shard{I} {n}/{len(todo)} ({time.time()-t0:.0f}s)", flush=True)
        time.sleep(0.33)
    json.dump(data, open(OUT, "w"))
    print(f"shard{I} DONE: {len(data)} entries", flush=True)

if __name__ == "__main__":
    main()
