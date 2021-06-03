import os

file_path = 'D:\\programming\\SplendidCat\\Web\\TFT-Statistics\\tft-frontend\\src\\assets\\TFT\\traits'
file_names = os.listdir(file_path)

i = 1
for name in file_names:
    if 'bg' in name:
        continue
    if 'Set5_' in name:
        continue
    
    src = os.path.join(file_path, name)
    dst = 'Set5_' + name[0].upper() + name[1:]
    dst = os.path.join(file_path, dst)
    os.rename(src, dst)
    print(src, dst)
