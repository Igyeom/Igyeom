import json

with open("gen3-new.json", "w") as h:
    with open("gen3.json", "r") as g:
        data = json.load(g)
        images = [i["image"] for i in data]
        with open("gen3-fixes.json", "r") as f:
            fixes = json.load(f)
            for i in range(len(fixes)):
                if fixes[i]["image"] in images:
                    for j in range(len(data)):
                        if fixes[i]["image"] == data[j]["image"]:
                            data[j] = fixes[i]
                else:
                    data.append(fixes[i])
    json.dump(data, h, indent=4)