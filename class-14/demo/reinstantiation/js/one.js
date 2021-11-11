'use strict';

if (localStorage.getItem('cats')) {
  const catsFromLS = JSON.parse(localStorage.getItem('cats'));
  // catsFromLS is now an array of generic objects
  for (let i = 0; i < catsFromLS.length; i++) {
    const rawCat = catsFromLS[i];
    new Cat(rawCat.name);
    allCats[i].render();
  }
}

catform.addEventListener('submit', handleCatSubmit);
