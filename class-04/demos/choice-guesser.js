
function faveAthletePoll() {
  let favoriteAthletes = ["Mohamed Salah", "Simone Biles", "Canelo Alvarez", "Sue Bird"];

  let maxTries = 6;
  let gotIt = false;

  for (let count = 1; count <= maxTries; count += 1) {

    let response = prompt("Who is a favorite athlete?");

    // is user choice in our array of faves?
    for (let i = 0; i < favoriteAthletes.length; i += 1) {
      let fave = favoriteAthletes[i];
      if (fave === response) {
        alert("You got it!");
        // count = maxTries; alternate way of exiting outer loop
        gotIt = true;
        break;
      }
    }

    if (gotIt) {
      break;
    }
  }

  alert(favoriteAthletes);
}

// entrypoint
// doFirstFiveQuestions();
faveAthletePoll();
// doLastThing();