const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([5, 6, 8]);
    reject("Rejected");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  
//                           fullfilled
//                          /
// Promise    -- pending -->
//                          \
//                           rejected
//
