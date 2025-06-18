function fizzBuzz(str1 = 'Fizz', str2 = 'Buzz') {
    const totalLength = str1.length + str2.length;
    if (totalLength % 3 === 0 && totalLength % 5 === 0) {
        return 'FizzBuzz';
    } else if (totalLength % 3 === 0) {
        return 'Fizz';
    } else if (totalLength % 5 === 0) {
        return 'Buzz';
    }
}
console.log(fizzBuzz("hello", "world"));
// Output: "fizzbuzz"





// Prompt user for input using browser prompt (for JS environments outside Node.js)
const yearOfBirth = prompt("Enter your year of birth: ");
const currentYear = new Date().getFullYear();
const age = currentYear - Number(yearOfBirth);

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age <= 36) {
    console.log("You are a youth.");
} else {
    console.log("You are an elder.");
} 
// Output: Depending on the input year, it will print whether the user is a minor, youth, or elder.
// This code prompts the user for their year of birth, calculates their age based on the current year,



function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// This code defines a function that finds two indices in an array such that their values add up to a given target.
// It uses a nested loop to check each pair of numbers in the array and returns their indices if they sum to the target.



