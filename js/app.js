// TODO: figure out what info we need to display
// * Store Location
// * Hours of Operation
// * Minimum Number of Customers per Hour
// * Maximum Number of Customers per Hour
// * Average Number of Cookies Sold

// ********** GLOBALS **********
let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let salesSection = document.getElementById('sales-section');
function salmonLogo() {
  let imgElem = document.createElement('img');
  console.log(imgElem);
  imgElem.src = 'img/patsSalmonLogo.png';
  salesSection.appendChild(imgElem);
}

// ********** HELPER FUNCTIONS/UTILITIES **********


// ********** OBJECT LITERALS **********
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesPurchased: 6.3,
  cookiesPurchased: [],
  dailyTotal: 0,
  numCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); // generates a customer number between min and max values
  },
  numOfCookies: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let cookieCount = Math.floor(this.numCust() * this.avgCookiesPurchased);
      this.cookiesPurchased.push(cookieCount); // pushes cookieCount value into cookiesPurchased array for cookies sold per hour
      this.dailyTotal += cookieCount; // generates daily total value by adding the cookieCount
    }
  },
  // here we have to use DOM manipulation to make the web page from scratch, set variables and create elements, add content, then append to
  // elementToBeTheParent.appendChild(elementToBecomeChild);
  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesPurchased.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hoursOfOperation[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal} cookies`;
    articleElem.appendChild(pElem);
  }
};

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesPurchased: 1.2,
  cookiesPurchased: [],
  dailyTotal: 0,
  numCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  numOfCookies: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let cookieCount = Math.floor(this.numCust() * this.avgCookiesPurchased);
      this.cookiesPurchased.push(cookieCount);
      this.dailyTotal += cookieCount;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesPurchased.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hoursOfOperation[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal} cookies`;
    articleElem.appendChild(pElem);
  }
};


let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesPurchased: 3.7,
  cookiesPurchased: [],
  dailyTotal: 0,
  numCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  numOfCookies: function () {
    let cookieCount = Math.floor(this.numCust() * this.avgCookiesPurchased);
    this.cookiesPurchased.push(cookieCount);
    this.dailyTotal += cookieCount;
  },
  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesPurchased.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hoursOfOperation[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal} cookies`;
    articleElem.appendChild(pElem);
  }
};


let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiesPurchased: 2.3,
  cookiesPurchased: [],
  dailyTotal: 0,
  numCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  numOfCookies: function () {
    let cookieCount = Math.floor(this.numCust() * this.avgCookiesPurchased);
    this.cookiesPurchased.push(cookieCount);
    this.dailyTotal += cookieCount;
  },
  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesPurchased.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hoursOfOperation[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal} cookies`;
    articleElem.appendChild(pElem);
  }
};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiesPurchased: 4.6,
  cookiesPurchased: [],
  dailyTotal: 0,
  numCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  numOfCookies: function () {
    let cookieCount = Math.floor(this.numCust() * this.avgCookiesPurchased);
    this.cookiesPurchased.push(cookieCount);
    this.dailyTotal += cookieCount;
  },
  render: function () {
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.cookiesPurchased.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hoursOfOperation[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal} cookies`;
    articleElem.appendChild(pElem);
  }
};

// ********** EXECUTABLE CODE **********
salmonLogo(); // prints logo to webpage

seattle.numOfCookies();
seattle.render();
console.log(seattle);

tokyo.numOfCookies();
tokyo.render();
console.log(tokyo);

dubai.numOfCookies();
dubai.render();
console.log(dubai);

paris.numOfCookies();
paris.render();
console.log(paris);

lima.numOfCookies();
lima.render();
console.log(lima);
