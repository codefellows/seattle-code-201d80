const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStand(location, minCustomers, maxCustomers, avgSales) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.salesPerHour = [];

  this.generateHourlySales();
}

CookieStand.prototype.generateHourlySales = function () {

  for (let i = 0; i < hours.length; i += 1) {
    const rando = Math.random();

    const absCustomerRange = this.maxCustomers - this.minCustomers + 1;

    const randomCustomerCount = Math.floor(Math.random() * absCustomerRange);

    const adjustedCustomerCount = randomCustomerCount + this.minCustomers;

    const estimatedSales = Math.ceil(adjustedCustomerCount * this.avgSales);

    this.salesPerHour.push(estimatedSales);
  }
}

// const seattle = new CookieStand('Seattle', 10, 20, 6.3);
// console.log('seattle',seattle);
// const lima = new CookieStand('Lima', 5, 10, 2.3);
// console.log('lima',lima);

// const stands = [seattle,lima];

const stands = [new CookieStand('Seattle', 10, 20, 6.3), new CookieStand('Lima', 5, 10, 2.3)]

// get totals per hour per stand

const hourlyTotals = [];

// outer (aka slow) loop is the hours
for (let hourlyIndex = 0; hourlyIndex < hours.length; hourlyIndex += 1) {
  // now we're in the hourly slot

  const timeSlot = hours[hourlyIndex];

  let hourlySalesTotal = 0;

  // inner loop is over the stands
  for (let standIndex = 0; standIndex < stands.length; standIndex += 1) {

    const currentStand = stands[standIndex];

    const hourlySalesForCurrentStand = currentStand.salesPerHour[hourlyIndex];

    hourlySalesTotal += hourlySalesForCurrentStand;
  }

  // console.log(timeSlot, hourlySalesTotal);
  hourlyTotals.push(hourlySalesTotal);

}

console.log(hourlyTotals);