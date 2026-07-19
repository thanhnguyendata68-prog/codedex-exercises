const os = require('os'); //import the OS module
const path = require('path'); //import the path module
const fs = require('fs'); //import the file system module

// Define an array of affirmations directly in the code
const affirmations = [
  'This is gonna be your year!',
  'You can absolutely climb that V4!',
  'You are capable of achieving your goals!',
  'You are strong and resilient!',
  'You are worthy of love and respect!',
];


// Define the path to the new folder
const desktopPath = path.join(os.homedir(), 'OneDrive', 'Desktop', 'Reviewing', 'Node', 'Module'); // Adjust this path as needed
fs.mkdirSync(desktopPath, { recursive: true });

// Function to get a random affirmation and save it to a file in the target folder
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