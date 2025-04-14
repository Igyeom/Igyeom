import os
from PIL import Image

for i in os.listdir('gen2/ArtsBlock'):
    if i in os.listdir('gen2'):
        continue
    im = Image.open('gen2/ArtsBlock/' + i)
    im.resize((1008, 756))
    im.save('gen2/' + i)