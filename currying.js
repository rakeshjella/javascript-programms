// 🔹 What is Function Currying in JavaScript?
// Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

// Instead of:

// function add(a, b) {
//     return a + b;
//   }
//   add(2, 3); // 5
  
// You curry it like this:

function add(a) {
    return function(b) {
      return a + b;
    };
  }
  
  add(2)(3); // 5
  
//   ✅ Currying for n numbers using recursion
function sum(a) {
    return function(b) {
      if (b !== undefined) {
        return sum(a + b);
      } else {
        return a;
      }
    };
  }
  
  // Usage:
  console.log(sum(1)(2)(3)(4)()); // 10
  console.log(sum(10)(20)(30)()); // 60

//   Explanation:
//   It keeps returning a function that adds the next value to a.  
//   When you call it without an argument (i.e. ()), it returns the accumulated result.
  
    
