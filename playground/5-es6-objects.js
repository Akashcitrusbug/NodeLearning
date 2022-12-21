// Object Property shorthand

const userName = "Akash";
const userAge = 25;

const user = {
  userName,
  age: userAge,
  location: "India",
};

// Object Destructuring

const product = {
  label: "NoteBook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: productLabel, stock, rating = 5 } = product;
