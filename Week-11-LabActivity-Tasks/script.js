//



//Task1:
// Create a Promise for a birthday surprise
const birthdayPromise = new Promise((resolve, reject) => {
    const isPartyOn = Math.random() > 0.5; // 50% chance
  
    setTimeout(() => {
      if (isPartyOn) {
        resolve("🎉 Party is happening! 🎂");
      } else {
        reject("😞 No party this year.");
      }
    }, 2000); // Simulate waiting for the surprise
  });
  
  // Consume the Promise
  birthdayPromise
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.log("Error:", error);
    });

    //Task2:
    // Generate a random number between 1 and 5
const randomNumber = Math.floor(Math.random() * 5) + 1;

// Create a function that returns a Promise
function guessNumber(userGuess) {
  return new Promise((resolve, reject) => {
    if (userGuess === randomNumber) {
      resolve("🎉 You guessed it right!");
    } else {
      reject(`😞 Wrong guess. The number was ${randomNumber}.`);
    }
  });
}

// Play the game
const userGuess = parseInt(prompt("Guess a number between 1 and 5:"));

guessNumber(userGuess)
  .then((message) => console.log("Success:", message))
  .catch((error) => console.log("Error:", error));
  
  //Task3:
  // Function to fetch country info
function getCountryInfo(countryName) {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Country not found.");
        return response.json();
      })
      .then((data) => {
        const country = data[0];
        console.log(`Country: ${country.name.common}`);
        console.log(`Region: ${country.region}`);
        console.log(`Population: ${country.population}`);
      })
      .catch((error) => console.error("Error:", error.message));
  }
  
  // Example usage
  getCountryInfo("Canada");

  //Task4:
  // Function to fetch neighboring countries
function getNeighbors(countryName) {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Country not found.");
        return response.json();
      })
      .then((data) => {
        const country = data[0];
        console.log(`Country: ${country.name.common}`);
        console.log(`Borders: ${country.borders?.join(", ") || "No neighbors."}`);
  
        // Fetch neighbors if they exist
        if (country.borders) {
          return Promise.all(
            country.borders.map((code) =>
              fetch(`https://restcountries.com/v3.1/alpha/${code}`).then((res) =>
                res.json()
              )
            )
          );
        }
      })
      .then((neighborData) => {
        if (neighborData) {
          console.log("Neighboring countries:");
          neighborData.forEach((neighbor) =>
            console.log(neighbor[0].name.common)
          );
        }
      })
      .catch((error) => console.error("Error:", error.message));
  }
  
  // Example usage
  getNeighbors("Germany");