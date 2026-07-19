const fs = require('fs');

// Delete the file if it exists
fs.unlink('myDiary.txt', (err) => {
  if (err) {
    console.error("Error deleting file", err);
    return;
  } else {
    console.log("Successfully deleted myDiary.txt");
  }
})