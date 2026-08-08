import csv

# Track the highest sales and the corresponding book details
max_sales = 0.0
best_Selling_book = None

# Step 1: Read the input file and find the top seller
with open('FileIO/Bestseller - Sheet1.csv', 'r', encoding='utf-8') as file:
  # Create a CSV reader object
  csv_reader = csv.reader(file)

  # Skip header row so we don't process column titles
  header = next(csv_reader)

  # Use the CSV reader to navigate through the data and find the book with the highest sales, via the sales in millions column.
  for row in csv_reader:
    sales = float(row[4])  # Assuming the sales column is the fifth column (index 4)

    if sales > max_sales:
      max_sales = sales
      best_Selling_book = row


# Step 2: Create the output file and write the result
with open('FileIO/bestseller_info.csv', 'w', newline='', encoding='utf-8') as file:
  # Create a CSV writer object
  csv_writer = csv.writer(file)

  # Write header
  csv_writer.writerow(['Title', 'Author', 'Sales in Millions'])

  # Write the best-selling book row
  if best_Selling_book:
    csv_writer.writerow(best_Selling_book)

print(f"Top Seller: {best_Selling_book[0]} by {best_Selling_book[1]} ({max_sales} million sales)")