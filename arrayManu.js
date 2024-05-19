function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray);
