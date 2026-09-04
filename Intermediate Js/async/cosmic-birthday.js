
// Define fetchAPOD() function here 💖
async function fetchAPOD(date) {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`);
  if (response.ok === false ) {
    throw new Error("A problem occurred while fetching the data.");
  }

  return await response.json();
}

function renderAPOD(data) {
  const apodContainer = document.getElementById("apod-container");
  apodContainer.innerHTML = `
   <img id="apod-image" src="${data.url}" alt="${data.title}" width="600">
   <div id="apod-info">
     <h2 id="apod-title">${data.title}</h2>
     <p>${data.explanation}</p>
   </div>
 `;
}

document.getElementById("fetchBtn").addEventListener("click",
  async function () {
  const birthday = document.getElementById("birthday").value;
  const errorMessage = document.getElementById("error-message");
  const apodContainer = document.getElementById("apod-container");
  const minDate = new Date("1995-06-16");

  if (new Date(birthday) < minDate) {
    errorMessage.textContent = "Invalid entry: Please enter a date on or after June 16, 1995.";
    apodContainer.innerHTML = "";
  } else {
    errorMessage.textContent = "";
    try {
      const data = await fetchAPOD(birthday);
      renderAPOD(data);
    } catch {
      errorMessage.textContent = error.message;
      apodContainer.innerHTML = "";
    }
  }
});