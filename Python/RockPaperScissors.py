import random

print("===================")
print("Rock Paper Scissors ")
print("===================")

print("1) Rock ✊\n2) Paper ✋\n3) Scissors ✌️\n4) Exit\n ")

option = int(input("Pick a number: "))

while option < 1 or option > 4:
  print("Invalid option. Please try again.")
  option = int(input("Pick a number: "))
if option == 4:
  print("Exiting...")
  exit()
  
computer = random.randint(1, 3)
result = ""

if option == computer:
  result = "It's a tie! "
elif (option == 1 and computer == 3) or (option == 2 and computer == 1) or (option == 3 and computer == 2):
  result = "The player won! "
else:
  result = "The computer won! "

print("You chose: " + str(option))
print("The computer chose: " + str(computer))
print(result)