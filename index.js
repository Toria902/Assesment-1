const message = "hello world";
const capitalizedMessage = message.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(capitalizedMessage);
// Output: "Hello World"
// This code takes a string, splits it into words, capitalizes the first letter of each word,
// and then joins them back together into a single string.
// The code demonstrates how to manipulate strings in JavaScript, specifically focusing on capitalizing the first letter of each word in a sentence.


const statement = "JavaScript is amazing!";
const countA = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}
console.log(countA(statement));
// Output: 4
// This code defines a function that counts the occurrences of the letter 'a' in a given string.


for (let i = 1; i <= 5; i++) {
    console.log(i * 3);
}
// Output: 3 6 9 12 15
// This code uses a for loop to print the first 5 multiples of 3.


