'use strict';


// Capitalize First Letter of Constructor Functions
function Kitten(kittenName, likes, imgUrl, goodWithKids, goodWithDogs, goodWithCats, breed) {

  this.name = kittenName;
  this.likes = likes;
  this.imgUrl = imgUrl;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithCats = goodWithCats;
  this.breed = breed;

  this.age = 0; // will be reset by call to assignAge

  this.assignAge();
}

// methods must "attach" to the constructor function's prototype
Kitten.prototype.assignAge = function () {
  // this = the particular kitten
  this.age = randomInRange(3, 12) + ' months';
}

Kitten.prototype.render = function () {
  const articleElem = document.createElement('article'); // create child element

  kittenContainerElem.appendChild(articleElem); // add the child to parent

  // add h2 to article
  // find parent - already got it as articleElem
  const h2Elem = document.createElement('h2'); // create child
  articleElem.appendChild(h2Elem); // append child
  h2Elem.textContent = this.name;// set/update child content as needed


  // need little description in p tag along with age
  const descriptionElem = document.createElement('p');
  articleElem.appendChild(descriptionElem);
  descriptionElem.textContent = `${this.name} is adorable and is ${this.age} old`;


  // move to use of const as you see fit for now, otherwise use let


  // list of likes
  const listElem = document.createElement('ul');
  articleElem.appendChild(listElem);

  for (let i = 0; i < this.likes.length; i += 1) {
    const likeElem = document.createElement('li');
    listElem.appendChild(likeElem);
    const likeText = this.likes[i];
    likeElem.textContent = likeText;
  }

  const imgElem = document.createElement('img');
  articleElem.appendChild(imgElem);
  imgElem.setAttribute('src', this.imgUrl);
  imgElem.setAttribute('alt', 'cute picture of ' + this.name);


  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  const headerRowElem = document.createElement('tr');
  tableElem.appendChild(headerRowElem);

  const kidsElem = document.createElement('th');
  headerRowElem.appendChild(kidsElem);
  kidsElem.textContent = 'Kids';

  const dogsElem = document.createElement('th');
  headerRowElem.appendChild(dogsElem);
  dogsElem.textContent = 'Dogs';

  const catsElem = document.createElement('th');
  headerRowElem.appendChild(catsElem);
  catsElem.textContent = 'Other Cats';


  const dataRowElem = document.createElement('tr');
  tableElem.appendChild(dataRowElem);

  const kidsDataElem = document.createElement('td');
  dataRowElem.appendChild(kidsDataElem);
  kidsDataElem.textContent = this.goodWithKids;

  const dogsDataElem = document.createElement('td');
  dataRowElem.appendChild(dogsDataElem);
  dogsDataElem.textContent = this.goodWithDogs;

  const catsDataElem = document.createElement('td');
  dataRowElem.appendChild(catsDataElem);
  catsDataElem.textContent = this.goodWithCats;




}

const frankie = new Kitten('Frankie', ['catnip', 'chasing string', 'ignoring humans', 'torturing birds'], 'images/frankie.jpeg', true, false, true, 'short-haired');


const serena = new Kitten('Serena', ['other kitties', 'sunlight', 'ignoring humans', 'torturing birds'], 'images/serena.jpeg', true, false, false, 'tabby');

const jumper = new Kitten('Jumper', ['other kitties', 'sunlight', 'ignoring humans', 'torturing birds'], 'images/jumper.jpeg', true, false, false, 'persian')

function randomInRange(min, max) {
  let range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}




// done with cat modeling, not it's DOM time

const kittenContainerElem = document.getElementById('kittenProfiles'); // find parent element

frankie.render();
serena.render();
jumper.render();

// we need to do this several times starting on next line

