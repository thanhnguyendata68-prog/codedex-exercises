import imageio.v3 as iio

# 1. List your image files
filenames = ['team-pic1.png', 'team-pic2.png']
images = []

# 2. Read each image and add it to our list
for filename in filenames:
    images.append(iio.imread(filename))

# 3. Create and save the GIF
iio.imwrite('team.gif', images, duration=500, loop=0)

# 4. Tell the terminal to show us a message!
print("🎉 Success! Your GIF has been created and saved!")