// setTimeout(() => {
//   console.log("Two seconds are up");
// }, 2000);

// const names = ["Akash", "Soni", "H"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// const data = geocode("Philadephia");
// console.log(data);

// geocode("Philadephia", (data) => {
//   console.log(data);
// });
// console.log(data);

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum);
// });

const doWorkCallback = (callback) => {
  setTimeout(() => {
    console.log("This is my error.", undefined);
    console.log(undefined, [1, 2, 3]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
