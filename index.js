const username = "joec1982";
const firstName = "Joe";
const lastName = "Cowin";

const product1 = "T-Shirt";
const product2 = "Socks";

const product = {
  name: "socks",
  price: 5.99,
  description: "A pair of warm, fuzzy socks",
};

function createProductTile(prod) {
  return `
    <figure>
      <img src="${product.imgUrl}" alt="${product.name}">
      <figcaption>
        <h2>${product.name}</h2>
        <small>${product.price}</small>
        <p>${product.description}</p>
      </figcaption>
    `;
}

const cartTotal = 101;
const discount = 0.1;

function getFullName(fName, lName) {
  return fName + " " + lName;
}

// Template literals with interpolation
const welcomeMsg = `Welcome to the store, ${getFullName(firstName, lastName)}`;

console.log(welcomeMsg);

// TODO: Write an 'if' statement such that if the total is over $100, the user gets a 10% discount. Otherwise, there is no discount. Either way log out the correct output. Use template literals to interpolate the discount amount and the total.

if (cartTotal > 100) {
  console.log(`You get a ${discount * 100}% discount!`);
  console.log(`Your total is now $${cartTotal - cartTotal * discount}`);
} else {
  console.log(`Your total is $${cartTotal}`);
}
