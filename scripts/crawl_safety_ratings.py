#!/usr/bin/env python3
"""Crawl NHTSA SafetyRatings (crash-test stars) for 2015+ US-market vehicles.

Chain: modelyear -> make -> model -> VehicleId -> rating detail.
Free public API, no key. Be polite: ~3 req/s, resumable via output file.

Usage: python3 scripts/crawl_safety_ratings.py [start_year] [end_year]
Output: data/safety-ratings.json  {year|make|model: {overall, front, side, rollover, VehicleId, nhtsaId}}
"""
import json, os, sys, time, urllib.request, urllib.parse

BASE = "https://api.nhtsa.gov/SafetyRatings"
OUT = os.path.join(os.path.dirname(__file__), "..", "data", "safety-ratings.json")
OUT = os.path.abspath(OUT)

def get(url, tries=3):
    for i in range(tries):
        try:
            with urllib.request.urlopen(url, timeout=30) as r:
                return json.load(r)
        except Exception as e:
            if i == tries - 1:
                print(f"FAIL {url}: {e}", file=sys.stderr)
                return None
            time.sleep(2 * (i + 1))

def main():
    y0, y1 = int(sys.argv[1]) if len(sys.argv) > 1 else 2015, int(sys.argv[2]) if len(sys.argv) > 2 else 2026
    data = {}
    if os.path.exists(OUT):
        data = json.load(open(OUT))
    for year in range(y0, y1 + 1):
        idx = get(f"{BASE}/modelyear/{year}")
        if not idx:
            continue
        makes = sorted({v["Make"] for v in idx.get("Results", [])})
        for make in makes:
            mdl = get(f"{BASE}/modelyear/{year}/make/{urllib.parse.quote(make)}")
            if not mdl:
                continue
            for v in mdl.get("Results", []):
                model = v.get("Model", "")
                key = f"{year}|{make}|{model}"
                if key in data:
                    continue
                vv = get(f"{BASE}/modelyear/{year}/make/{urllib.parse.quote(make)}/model/{urllib.parse.quote(model)}")
                results = (vv or {}).get("Results", [])
                vid = results[0].get("VehicleId") if results else None
                if not vid:
                    data[key] = None
                    continue
                det = get(f"{BASE}/VehicleId/{vid}")
                d = (det or {}).get("Results", [{}])[0]
                data[key] = {
                    "overall": d.get("OverallRating"),
                    "front": d.get("OverallFrontCrashRating"),
                    "side": d.get("OverallSideCrashRating"),
                    "rollover": d.get("RolloverRating"),
                    "vehicleId": vid,
                    "description": d.get("VehicleDescription"),
                }
                time.sleep(0.35)
            os.makedirs(os.path.dirname(OUT), exist_ok=True)
            json.dump(data, open(OUT, "w"))
        print(f"{year}: {sum(1 for k in data if k.startswith(str(year)))} models banked", flush=True)
    print(f"DONE: {len(data)} entries -> {OUT}")

if __name__ == "__main__":
    main()
