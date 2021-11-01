// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data
'use strict';

let frankie = {
  name: 'Frankie',
  age: 0, // coming soon
  likes: ['catnip', 'chasing string', 'ignoring humans', 'torturing birds'],
  imgUrl: 'images/frankie.jpeg',
  goodWithKids: true,
  goodWithDogs: false,
  goodWithCats: true,
  breed: 'short-haired',
  assignAge: function () {
    // generate a random age and assign to Frankie's age property
    // how to assign "my" age?
    // me.age = some random number
    // self.age = some random number
    this.age = randomInRange(3, 12) + ' months';
  }
}

// tell Frankie to assign itself an age
frankie.assignAge();


function randomInRange(min, max) {
  let range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}



// done with cat modeling, not it's DOM time

const kittenContainerElem = document.getElementById('kittenProfiles'); // find parent element

const articleElem = document.createElement('article'); // create child element

kittenContainerElem.appendChild(articleElem); // add the child to parent

// add h2 to article
// find parent - already got it as articleElem
const h2Elem = document.createElement('h2'); // create child
articleElem.appendChild(h2Elem); // append child
h2Elem.textContent = frankie.name;// set/update child content as needed


// need little description in p tag along with age
const descriptionElem = document.createElement('p');
articleElem.appendChild(descriptionElem);
descriptionElem.textContent = `${frankie.name} is adorable and is ${frankie.age} old`;
// descriptionElem.textContent = frankie.name + " is adorable and is " + frankie.age + " old";


// move to use of const as you see fit for now, otherwise use let


// list of likes
const listElem = document.createElement('ul');
articleElem.appendChild(listElem);

for (let i = 0; i < frankie.likes.length; i += 1) {
  const likeElem = document.createElement('li');
  listElem.appendChild(likeElem);
  const likeText = frankie.likes[i];
  likeElem.textContent = likeText;
}

const imgElem = document.createElement('img');
articleElem.appendChild(imgElem);
imgElem.setAttribute('src', frankie.imgUrl);
imgElem.setAttribute('alt', 'cute picture of ' + frankie.name);



// attach those elements to the parent in the DOM.

// object literals
// bracket and dot notation
// math.random
// add kittens to the page
// each kitten gets an Article
// each kitten's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild
