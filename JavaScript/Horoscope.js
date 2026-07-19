console.log("What month were you born? (1-12):");
let userMonth = Math.floor(Math.random() * 12) + 1; // Simulating user input for month

for (let month = 1; month <= 12; month++) {
  if (userMonth === 1){
    console.log("Your horoscope is Capricorn.");
    break;
  } else if (userMonth === 2) {
    console.log("Your horoscope is Aquarius.");
    break;
  } else if (userMonth === 3) {
    console.log("Your horoscope is Pisces.");
    break;
  } else if (userMonth === 4) {
    console.log("Your horoscope is Aries.");
    break;
  } else if (userMonth === 5) {
    console.log("Your horoscope is Taurus.");
    break;
  } else if (userMonth === 6) {
    console.log("Your horoscope is Gemini.");
    break;
  } else if (userMonth === 7) {
    console.log("Your horoscope is Cancer.");
    break;
  } else if (userMonth === 8) {
    console.log("Your horoscope is Leo.");
    break;
  } else if (userMonth === 9) {
    console.log("Your horoscope is Virgo.");
    break;
  } else if (userMonth === 10) {
    console.log("Your horoscope is Libra.");
    break;
  } else if (userMonth === 11) {
    console.log("Your horoscope is Scorpio.");
    break;
  } else if (userMonth === 12) {
    console.log("Your horoscope is Sagittarius.");
    break;
  } else {
    console.log("Invalid month. Please enter a number between 1 and 12.");
    break;
  }
}