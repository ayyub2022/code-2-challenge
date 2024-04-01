function swap(input) { // make a function and function name which allows input as a parameter
    let swapped = ''; //make a variable with an empty string
    for (const char of input) { // checks if char is equals to lowerCase if it does it swaps it to upperCase if its upperCase change to lowerCase
        if (char === char.toLowerCase()) {
            swapped += char.toUpperCase();
        } else {
            swapped += char.toLowerCase();
        }
    }
    return swapped;// returns the swapped char
}
console.log(swap("The Quick Brown Fox"));// the output