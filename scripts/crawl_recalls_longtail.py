#!/usr/bin/env python3
"""Crawl NHTSA recalls for the long tail: every 2015+ year/make/model combo in
complaints-agg.json that is NOT already covered by recalls-top80.json.

Free public API, no key. Polite ~3 req/s. Resumable via output file.

Usage: python3 scripts/crawl_recalls_longtail.py
Output: data/recalls-all.json {"year|MAKE|MODEL": {recalls, campaigns:[...]}}
"""
import json, os, sys, time, urllib.request, urllib.parse

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
HERE = os.path.dirname(__file__)
AGG = os.path.abspath(os.path.join(HERE, "..", "data", "complaints-agg.json"))
TOP = os.path.abspath(os.path.join(HERE, "..", "data", "recalls-top80.json"))
OUT = os.path.abspath(os.path.join(HERE, "..", "data", "recalls-all.json"))

def key(y, m, mo): return f"{y}|{m}|{mo}"

def get(url, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "carc-data-bank/1.0"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
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
    todo = [c for c in combos if c[3] not in data]
    print(f"{len(combos)} long-tail combos, {len(data)} banked, {len(todo)} to go")
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
            data[k] = {"recalls": res.get("Count", 0), "campaigns": camps}
        if n % 50 == 0:
            json.dump(data, open(OUT, "w"))
            print(f"{n}/{len(todo)} banked ({time.time()-t0:.0f}s)")
        time.sleep(0.33)
    json.dump(data, open(OUT, "w"))
    print(f"DONE: {len(data)} entries -> {OUT}")

if __name__ == "__main__":
    main()
