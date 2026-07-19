# 1. player inlcude attack/block/heal with hp
# 2. enemy include attack/block/heal with hp
# 3. choosing your planet and directly impact to your hp or any condition

import random

option = input("Choose your planet: \n1) Earth 🌍\n2) Mars 🔴\n3) Venus ♀️\n4) Exit\n ")

attack = 0
block = 0
heal = 0
hp = 100

NPCs = random.randint(1, 3)

if option == "1":
  print("You chose Earth 🌍")
  attack = 20
  block = 10
  heal = 15
elif option == "2":
  print("You chose Mars 🔴")
  attack = 25
  block = 5
  heal = 10
elif option == "3":
  print("You chose Venus ♀️")
  attack = 15
  block = 20
  heal = 5
elif option == "4":
  print("Exiting...")
  exit()
else:
  print("Invalid option. Please try again.")
  exit()

