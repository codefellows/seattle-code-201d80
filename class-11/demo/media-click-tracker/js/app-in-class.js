'use strict';
/*

1) Display 2 goats initially

  - How to get element with id left_goat_img
  - update it's src attribute's value
  - update it's label 
  

2) Select preferred goat
  - click = select

3) add ability for rounds of selecting preferred goat
*/

// add listeners
const goatImageOne = document.getElementById('left_goat_img');
goatImageOne.addEventListener("click", handleGoatClick);


// create functions
function handleGoatClick(event) {
  // track times this particular goat has been clicked
  // increment round counter

  // if rounds remain
  // render new set of goats
  // - generate a new set of goats
  // otherwise
  // show report
}

function generateGoatSet() {
  // we need a full set to draw from
  const allGoats = ['cruisin-goat', 'sweater-goat', 'goat-away', 'float-your-goat', 'kissing-goat']

}

function renderGoats(goatOneTitle, goatTwoTitle) {

  const goatImageOne = document.getElementById('left_goat_img');

  goatImageOne.src = `assets/images/${goatOneTitle}.jpg`;

  const goatNameOne = document.getElementById('left_goat_name');

  goatNameOne.textContent = goatOneTitle;

  const goatImageTwo = document.getElementById('right_goat_img');

  goatImageTwo.src = `assets/images/${goatTwoTitle}.jpg`;

  const goatNameTwo = document.getElementById('right_goat_name');

  goatNameTwo.textContent = goatTwoTitle;
}

// repeat per round
renderGoats('float-your-goat', 'goat-away');