# This opens example file for writing
#file = open('example.txt', 'w')

#file.write('Hello, World! 🌎')

# The issue is that on Windows, standard file operations default to the system locale encoding (in your case, cp1252), which cannot process Unicode characters like emojis (🌍).
with open('FileIO/example.txt', 'w', encoding='utf-8') as file:
  file.write('Hello, World! 🌎')

print("Successfully wrote to example.txt!")