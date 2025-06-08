import os
from PIL import Image

for i in os.listdir('.'):
    if i.startswith("Arts") and i.endswith(".jpg"):
        im = Image.open(i).resize((1414, 1000))
        im.save('plans/' + i, quality=75)