import os

l = []
FOLDER = input("Name of folder (relative to script position): ")

for i in os.listdir(FOLDER):
    l.append(FOLDER + "/" + i)

print(str(l).replace("'", '"'))