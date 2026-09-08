from rembg import remove
from PIL import Image

input_image = Image.open("logo.jpeg")

output_image = remove(input_image)

output_image.save("logo_bg.png")