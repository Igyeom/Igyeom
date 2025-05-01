import os
from PIL import Image
from heic2png import HEIC2PNG
dirs = ['gen3']
for dir in dirs:
    for i in os.listdir(dir):
        HEIC2PNG(dir+'/'+i).save('input3/'+i+'.png')
for i in os.listdir('input3'):
    im = Image.open('input3/'+i)
    im.resize((1008, 756))
    im.save('output3/' + i)