// A Promise is an object representing the eventual completion (or failure)
//  of an asynchronous operation and its resulting value.

// It has three states:

// Pending – Initial state
// Fulfilled – Operation completed successfully
// Rejected – Operation failed

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!");
      // or reject("Error!");
    }, 1000);
  });
  
promise.then(result => console.log(result)).catch(err => console.error(err));

// ✅ Promise.all()
// Waits for all promises to resolve or any one to reject.

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]).then(values => {
    console.log(values); // [1, 2, 3]
  });

//   If any promise rejects:

Promise.all([
    Promise.resolve(1),
    Promise.reject("Oops"),
    Promise.resolve(3)
  ]).catch(err => {
    console.error(err); // "Oops"
  });

  
// ✅ Promise.any() (ES2021+)
// Waits for any one promise to resolve, ignores rejections. If all reject, it throws an AggregateError.

Promise.any([
    Promise.reject("Error 1"),
    Promise.resolve("First Success"),
    Promise.resolve("Second Success")
  ]).then(result => {
    console.log(result); // "First Success"
  });

  
// ✅ Promise.race()
// Returns the result of the first settled promise (fulfilled or rejected).
// If a rejection comes first, it'll reject.

Promise.race([
    new Promise(res => setTimeout(() => res("Fast"), 100)),
    new Promise(res => setTimeout(() => res("Slow"), 1000))
  ]).then(result => {
    console.log(result); // "Fast"
  });
  
//  ✅ Promise.allSettled()
//   Waits for all promises to settle (either fulfilled or rejected) and gives you the result for each.

Promise.allSettled([
    Promise.resolve(1),
    Promise.reject("Error"),
    Promise.resolve(3)
  ]).then(results => {
    console.log(results);
  });

//   Output
//   [
//     { status: 'fulfilled', value: 1 },
//     { status: 'rejected', reason: 'Error' },
//     { status: 'fulfilled', value: 3 }
//   ]
  