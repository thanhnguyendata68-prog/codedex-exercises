const fs = require('fs');

const diaryEntry = [
  'Today is July 9th, 2026',
  'The weather is raining and dark',
  'I am feeling a bit energetic today, so I decided to go for a walk in the park'
];

// .join('\n') glues the array items together with a line break in between!
const diaryString = diaryEntry.join('\n');

// 1. Write the formatted string to the file
fs.writeFile('myDiary.txt', diaryString, (err) => {
  if (err) {
    console.error("Error writing file", err);
  } else {
    console.log("Successfully wrote to myDiary.txt\n---");

    // 2. Read the file ONLY AFTER it has finished writing successfully
    fs.readFile('myDiary.txt', 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading file", err);
        return;
      }
      console.log(data);
    });
  }
});