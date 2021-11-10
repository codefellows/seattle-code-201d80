/* Globals */
currentRound = 0;
maxRound = 5;

/* Constructors */
function Goat(name, url) {
    this.name = name;
    this.url = url;
    this.votes = 0;
    this.shown = 0;
    Goat.all.push(this);
}

Goat.all = [];
Goat.left = null;
Goat.right = null;

Goat.prototype.render = function (side) {
    const imgElem = document.getElementById(side + '-img');
    imgElem.src = this.url;
    imgElem.alt = this.name;

    const captionElem = document.getElementById(side + '-caption');
    captionElem.textContent = this.name;

    this.shown += 1;
}

/* functions */
function getRandomGoat() {
    const index = Math.floor(Math.random() * Goat.all.length);
    return Goat.all[index];
}
function pickGoats() {

    const oldLeft = Goat.left;
    const oldRight = Goat.right;

    do {
        Goat.left = getRandomGoat();
    } while (Goat.left === oldLeft || Goat.left === oldRight);

    do {
        Goat.right = getRandomGoat();
    } while (Goat.right === Goat.left || Goat.right === oldRight || Goat.right === oldLeft)
}

function renderGoats() {
    Goat.left.render('left');
    Goat.right.render('right');
}


function populateGoats() {

    // NEW: check if any goats in local storage
    const storedGoatJSON = localStorage.getItem('goats');

    if(storedGoatJSON) {
        recreateStoredGoats(storedGoatJSON);
    } else {
        createNewGoats();
    }
}

function recreateStoredGoats(json) { // NEW: populate Goat.all with info from local storage

    const rawGoats = JSON.parse(json);

    for(let i = 0; i < rawGoats.length; i += 1) {
        const rawGoat = rawGoats[i];
        const goatInstance = new Goat(rawGoat.name, rawGoat.url);
        goatInstance.votes = rawGoat.votes;
        goatInstance.shown = rawGoat.shown;
    }  
}

function createNewGoats() {
    new Goat('cruisin', 'images/cruisin-goat.jpg');
    new Goat('float-your-goat', 'images/float-your-goat.jpg');
    new Goat('goat-away', 'images/goat-away.jpg');
    new Goat('goat-out-of-hand', 'images/goat-out-of-hand.jpg');
    new Goat('kissing', 'images/kissing-goat.jpg');
    new Goat('sassy', 'images/sassy-goat.jpg');
    new Goat('smiling', 'images/smiling-goat.jpg');
    new Goat('sweater', 'images/sweater-goat.jpg');
}

function attachEventListeners() {
    const container = document.getElementById('goat-container');
    container.addEventListener('click', handleClick);
}

function removeEventListeners() {
    const container = document.getElementById('goat-container');
    container.removeEventListener('click', handleClick);
}

function handleClick(event) {

    if (event.target.id === 'left-img') {

        Goat.left.votes += 1;
    
    } else if (event.target.id === 'right-img') {
    
        Goat.right.votes += 1;
    
    } else {
    
        alert('vote not counted');
        return;
    }

    currentRound += 1;

    if (currentRound === maxRound) {

        completeVoting();
    
    } else {
    
        pickGoats();
        renderGoats();
    }
}

function completeVoting() {

    document.getElementById('results').hidden = false;

    removeEventListeners();
    renderChart();
    renderList();

    localStorage.setItem('goats', JSON.stringify(Goat.all)); // NEW: save goats in local storage
    
}

function renderList() {

    const ulElem = document.getElementById('results-list');

    for (let i = 0; i < Goat.all.length; i++) {
        const goat = Goat.all[i];
        const liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        liElem.textContent = `${goat.name} was voted on ${goat.votes} times and seen ${goat.shown} times.`;
    }
}

// NOTE: make sure ChartJS version loaded is the one you want
function renderChart() {

    const goatNamesArray = [];
    const goatVotesArray = [];
    const goatShownArray = []; // New: gather "shown" totals

    for (let i = 0; i < Goat.all.length; i++) {
        const goat = Goat.all[i];

        const singleGoatName = goat.name;
        goatNamesArray.push(singleGoatName);

        const singleGoatVotes = goat.votes;
        goatVotesArray.push(singleGoatVotes);

        const singleGoatShown = goat.shown; // NEW: populate "shown" array
        goatShownArray.push(singleGoatShown);
    }

    const ctx = document.getElementById('results-chart').getContext('2d');
    const goatChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar', // NEW: change orientation

        // The data for our dataset
        data: {
            labels: goatNamesArray,
            datasets: [{
                label: 'Goat Votes',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: goatVotesArray
            },{
                label: 'Goat Shown', // NEW: add dataset for "shown"
                backgroundColor: 'rgb(99, 132, 132)',
                borderColor: 'rgb(99, 132, 132)',
                data: goatShownArray
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                xAxes: [{ // NEW: change to xAxes since now horizontal bar
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });
}


function start() {

    attachEventListeners();
    populateGoats();
    pickGoats();
    renderGoats();
}


/* entry point */
start();
