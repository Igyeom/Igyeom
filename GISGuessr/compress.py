import os
from PIL import Image

for i in os.listdir('output3'):
    if i in os.listdir('gen3'):
        continue
    im = Image.open('output3/' + i).resize((1008, 756))
    im.save('gen3/' + i[:-4] + ".jpg", quality=75)