
print("==================")
print("Area Calculator 📐")
print("==================")
print("1) Triangle\n2) Rectangle\n3) Square\n4) Circle\n5) Exit\n ")

option = int(input("which shape: "))

while option < 1 or option > 5:
  print("Invalid option. Please try again.")
  option = int(input("which shape: "))
  if option == 1:
    height = float(input("height: "))
    base = float(input("base: "))
    area = (height * base) / 2
    print("The area is " + str(area))
  elif option == 2:
    length = float(input("length: "))
    width = float(input("width: "))
    area = length * width
    print("The area is " + str(area))
  elif option == 3:
    side = float(input("side: "))
    area = side * side
    print("The area is " + str(area))
  elif option == 4:
    radius = float(input("radius: "))
    area = 3.14 * radius * radius
    print("The area is " + str(area))
  elif option == 5:
    print("Exiting...")
  else:
    print("Invalid option. Please try again.")


