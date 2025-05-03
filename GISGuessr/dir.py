import os

l = []

for i in os.listdir("gen3"):
    l.append("gen3/" + i)

print(str(l).replace("'", '"'))