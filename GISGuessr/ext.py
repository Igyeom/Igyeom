import os
from PIL import Image
from heic2png import HEIC2PNG
dirs = ['gen2/ArtsBlock', 'gen2/SecondaryBlock']
for dir in dirs:
    for i in os.listdir(dir):
        HEIC2PNG(dir+'/'+i).save('input/'+i+'.png')
for i in os.listdir('input'):
    im = Image.open('input/'+i)
    im.resize((1008, 756))
    im.save('output/' + i)