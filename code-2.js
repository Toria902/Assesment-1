function fizzBuzz(str1, str2) {
    const totalLength = (str1.length + str2.length);
    if (totalLength % 3 === 0 && totalLength % 5 === 0) {
        return 'fizzbuzz';
    } else if (totalLength % 3 === 0) {
        return 'dizz';
    } else if (totalLength % 5 === 0) {
        return 'buzz';
    }
}
console.log(fizzBuzz(result));




