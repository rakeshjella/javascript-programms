function fibonacci(n) {
    let fib = [0, 1]; // First two Fibonacci numbers
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Sum of the previous two numbers
    }
    return fib.slice(0, n); // Return the sequence up to 'n' terms
}

console.log(fibonacci(10)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]