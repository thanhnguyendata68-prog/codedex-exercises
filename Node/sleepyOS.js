const os = require('os'); //import the OS module

const uptimeInSeconds = os.uptime(); //Get system uptime in seconds 

// 7 days in seconds 
const SECONDS_IN_A_WEEK = 60 * 60 * 24 * 7;
// Convert uptime to hours, minutes, and seconds
const hours = Math.floor(uptimeInSeconds / 3600);
const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
const seconds = Math.floor(uptimeInSeconds % 60);
// Write your code below

console.log(`Hiiiii! I've been awake for ${hours}  hours, ${minutes} minutes, and ${seconds} seconds.
Beep beep! 🏎️💨 I've been awake for less than a week! Still unbothered. moisturized. happy. in my lane. focused. flourishing.😌`)