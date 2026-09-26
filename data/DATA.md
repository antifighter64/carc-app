# CARC government data bank (banked 2026-09-25, all free public sources)

- `vehicles-2015plus.json` - 15,996 vehicles (2015-2027), 63 US-market makes. Fields: year/make/model/displ/cyl/fuel/city/hwy/comb MPG/annualFuelCost/co2/class/drive/trans. Source: fueleconomy.gov full download (vehicles.csv, 50,409 vehicles 1984-2027).
- `complaints-agg.json` - NHTSA owner complaints aggregated per year/make/model (2015+): count, injuries, deaths. 12,636 combos from 631,443 complaints. Source: NHTSA ODI FLAT_CMPL (1.6GB, refreshed daily by NHTSA; pulled 9/25).
- `recalls-top80.json` - 877 recall campaigns for the 80 highest-complaint 2015+ vehicles, with component + summary. Source: NHTSA recalls API.
- `vpic-models-us.json` - 2,518 model names across the 63 US makes. Source: NHTSA vPIC API.

- `safety-ratings.json` - NHTSA SafetyRatings crash-test stars per year/make/model, 2015-2026: overall/front/side/rollover + vehicleId. 6,404 models. Source: NHTSA SafetyRatings API (banked 2026-09-26).

- `tsb-agg.json` - NHTSA Manufacturer Communications (TSBs) aggregated per 2015+ year/make/model: TSB count + up to 3 sample summaries. 19,319 combos from 1,031,502 rows. Source: static.nhtsa.gov MFR_COMMS flat files (banked 2026-09-26).

In flight: `recalls-all.json` - long-tail recalls for all 2015+ complaint combos beyond the top-80 (resumable crawler running).

Remaining pulls: emissions classification per vehicle (Communication Type lives in the 860MB-per-chunk TSBS flat files; CSV chunk files don't carry it). Raw filtered complaints TSV (2015+, 67MB gz) + fueleconomy vehicles.csv.zip are in the instincts Drive folder.
