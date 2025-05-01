import os

l = []

for i in os.listdir("output3"):
    l.append("output3/" + i)

print(str(l).replace("'", '"'))