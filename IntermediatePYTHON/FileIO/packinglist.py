import csv

data = [
  ['Item', 'Quantity'],
  ['Blender', 2],
  ['Posters', 30],
  ['Shoes', 2]
]

try:
  with open('FileIO/packing_list.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file)

    for row in csv_reader:
      print(row)

except FileNotFoundError:
  print("Packing list file not found. Creating a new one.")
  with open('FileIO/packing_list.csv', 'w', newline='', encoding='utf-8') as file:
    csv_writer = csv.writer(file)

    csv_writer.writerows(data)