let someArray = [3, 'a', 4, 7,'x', 'r',5, 6, 8 ]
function categorizeArray(arr) {
    let evens = [];
    let odds = [];
    let characters = [];
    arr.forEach(item => {
        if (typeof item === 'number') {
            if (item % 2 === 0) {
                evens.push(item);
            } else {
                odds.push(item);
            }
        } else if (typeof item === 'string' && item.length === 1) {
            characters.push(item);
        }
    });
    return {
        evens: evens.sort((a, b) => a - b).join(','),
        odds: odds.sort((a, b) => a - b).join(','),
        characters: characters.sort().join(',')
    };
}

// Example usage:
console.log(categorizeArray(someArray));




let arr1 = [1, 2, 3, 1]
function isduplicate(arr){
    let seen = new Set();
    for (let item of arr) {
        if (seen.has(item)) {
            return true;
        }
        seen.add(item);
    }
    return false;}

console.log(isduplicate(arr1));


let arr2 = [1, 2, 3, 4]
function isduplicate(arr){
    let seen = new Set();
    for (let item of arr) {
        if (seen.has(item)) {
            return true;
        }
        seen.add(item);
    }
    return false;}

console.log(isduplicate(arr2));




let ar1 =[2, 2, 1]
function findSingle(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}

console.log(findSingle(ar1));

let ar2 = [4, 1, 2, 1, 2];
function findSingle(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}
console.log(findSingle(ar2));

