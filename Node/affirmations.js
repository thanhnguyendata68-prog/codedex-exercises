const fs = require('fs');
const os = require('os');
const path = require('path');

// Define an array of affirmations directly in the code
const affirmations = [
  'This is gonna be your year!',
  'You can absolutely climb that V4!',
  'You are capable of achieving anything you set your mind to!',
  'You are strong, resilient, and unstoppable!',
  'You have the power to create the life you desire!'
  // …and so on
];

// Define the path to the desktop
const desktopPath = path.join(os.homedir(), 'Desktop', 'codedex-exercises', 'NODE');

// Function to get a random affirmation and save it to a file on the desktop
function saveRandomAffirmationToDesktop() {
  // Pick a random affirmation from the array
  const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

  // Define the new file path on the desktop (this will overwrite the file each time)
  const newFilePath = path.join(desktopPath, 'daily-affirmations.txt');

  // Write the random affirmation to a new file on the desktop (this will overwrite it)
  fs.writeFile(newFilePath, randomAffirmation, (err) => {
    if (err) {
      console.error('Error writing the affirmation to the file:', err);
    } else {
      console.log('Random affirmation saved to:', newFilePath);
    }
  });
}

// Call the function to get and save a random affirmation
saveRandomAffirmationToDesktop();