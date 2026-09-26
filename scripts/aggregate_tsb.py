#!/usr/bin/env python3
"""Aggregate NHTSA Manufacturer Communications (TSBs) per 2015+ year/make/model.

Input: MFR_COMMS_RECEIVED_*.zip from static.nhtsa.gov/odi/ffdd/tsbs/ (CSVs).
Output: data/tsb-agg.json {"year|MAKE|MODEL": {tsbs, samples:[...]}}
Free public data. One-shot batch (no API calls).
"""
import csv, json, os, sys, zipfile

HERE = os.path.dirname(__file__)
OUT = os.path.abspath(os.path.join(HERE, "..", "data", "tsb-agg.json"))
ZIPS = sys.argv[1:] or [
    "/tmp/MFR_COMMS_RECEIVED_2015-2019.zip",
    "/tmp/MFR_COMMS_RECEIVED_2020-2024.zip",
    "/tmp/MFR_COMMS_RECEIVED_2025-2026.zip",
]

def main():
    agg = {}
    rows = 0
    for zp in ZIPS:
        if not os.path.exists(zp):
            print(f"SKIP missing {zp}", file=sys.stderr)
            continue
        with zipfile.ZipFile(zp) as z:
            name = z.namelist()[0]
            with z.open(name) as f:
                rdr = csv.DictReader((l.decode("utf-8", "replace") for l in f))
                for r in rdr:
                    rows += 1
                    make = (r.get("Make") or "").strip().upper()
                    model = (r.get("Model") or "").strip().upper()
                    years = (r.get("Model Year") or "").replace(" ", "").split(",")
                    doc = (r.get("TSB/Document ID") or "").strip()
                    summ = (r.get("Concise Summary") or "").strip()[:300]
                    if not make or not model:
                        continue
                    for y in years:
                        if not (y.isdigit() and 2015 <= int(y) <= 2026):
                            continue
                        k = f"{y}|{make}|{model}"
                        e = agg.setdefault(k, {"tsbs": 0, "samples": []})
                        e["tsbs"] += 1
                        if len(e["samples"]) < 3 and summ:
                            e["samples"].append(f"{doc}: {summ}")
        print(f"{zp}: cumulative rows {rows}")
    json.dump(agg, open(OUT, "w"))
    print(f"DONE: {len(agg)} year/make/model combos from {rows} rows -> {OUT}")

if __name__ == "__main__":
    main()
