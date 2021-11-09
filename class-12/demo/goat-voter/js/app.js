/* Globals */
currentRound = 0;

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
    } while (Goat.right === Goat.left || Goat.right === oldRight || Goat.right === oldLeft )
}

function renderGoats() {
    Goat.left.render('left');
    Goat.right.render('right');
}


function populateGoats() {
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

    if (currentRound === 5) {
        document.getElementById('results').hidden = false;

        removeEventListeners();
        renderChart();
        renderList();
    } else {
        pickGoats();
        renderGoats();
    }
}

function renderList() {

    const ulElem = document.getElementById('results-list');

    for(let i=0; i < Goat.all.length; i++) {
        const goat = Goat.all[i];
        const liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        liElem.textContent = `${goat.name} was voted on ${goat.votes} times and seen ${goat.shown} times.`;
    }


}

function renderChart() {

    const goatNamesArray = [];
    const goatLikesArray = [];

    for (let i = 0; i < Goat.all.length; i++) {
        const goat = Goat.all[i];
        const singleGoatName = goat.name;
        goatNamesArray.push(singleGoatName);
        const singleGoatLikes = goat.votes;
        goatLikesArray.push(singleGoatLikes);
    }

    const ctx = document.getElementById('results-chart').getContext('2d');
    const goatChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: goatNamesArray,
            datasets: [{
                label: 'Goat Likes',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: goatLikesArray
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
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


/* start */
start();
