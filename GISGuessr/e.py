import json
with open("final.json", "r") as f:
    data = json.load(f)
for item in data:
    print(f'<link rel="preload" href="{item["image"]}" as="image">')