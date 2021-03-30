/**
 * app.js
 */
//question 1
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }


}
console.log("max", max(2, 4));

// question 2
function maxOfThree(a, b, c) {
    1, 2, 3
    let max = a;
    if (b > max && b > c) {
        max = b;
    } else if (c > max && c > b) {
        max = c;
    }
    return max;

}
console.log("maxOfThree", maxOfThree(4, 8, 3));

// question 3
function isVowel(char) {

    return /[aeiouAEIOU]/.test(char);


}
console.log("isVowel", isVowel('a'));

// question 4
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;

}
let sumArr = [1, 2, 3, 4]
console.log("sum", sum(sumArr));

function multiply(arr) {
    let multi = 1;
    for (let i = 0; i < arr.length; i++) {
        multi *= arr[i];
    }
    return multi;
}
let multiArr = [1, 2, 3, 4]
console.log("multiply", multiply(multiArr));

// question 5
function reverseWord(word){
    let revWord = '';
    for(let i=word.length-1; i>=0; i--){
        revWord += word[i];
    }
    return revWord;


}
console.log("reverseWord", reverseWord("abcd"));


// question 6
function findLongestWord(words) {
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
let longestTest = ["abcd", "dd", "dsssss"]
console.log("findLongestWord", findLongestWord(longestTest));


// question 7
function filterLongWords(words, i) {
    ['abc', 'sdfgh', 'erere']
    var newArr = []
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > i) {
            newArr.push(words[j])
        }
    }
    return newArr

}
let filterTest = ["abcd", "dd", "dsssss"]
console.log("filterLongWords", filterLongWords(filterTest, 3));

//question 8
function computeSumOfSquares(nums) {
    const squareNums = nums.map(x => x * x).reduce((x, y) => x + y);
    return squareNums;

}

let squareTest = [1, 2, 3, 4]
console.log("computeSumOfSquares", computeSumOfSquares(squareTest));

// question 9
function printOddNumbersOnly(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 != 0) {
            arr.push(nums[i]);
        }
    }
    return arr;

}
let oddTest = [1, 2, 3, 4]
console.log("printOddNumbersOnly", printOddNumbersOnly(oddTest));


// question 10
function computeSumOfSquaresOfEvensOnly(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            sum += nums[i]
        }
    }
    return sum;
}
let sumTest = [1, 2, 3, 4]
console.log("computeSumOfSquaresOfEvensOnly", computeSumOfSquaresOfEvensOnly(sumTest));

// question 11

function sumF(arr) {
    const sum = arr.reduce((a, b) => a + b);
    return sum;
}
console.log("sumF", sumF(sumTest));

function multiplyF(arr) {
    const mult = arr.reduce((a, b) => a * b);
    return mult;
}
console.log("multiplyF", multiplyF(sumTest));

// question 12
function findSecondBiggest(nums) {
    [1, 2, 3, 4, 5]
    let big = nums[0];
    let secondBig = nums[1];
    if (secondBig > big) {
        big = secondBig;
        secondBig = big;
    }
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > big) {
            secondBig = big;
            big = nums[i];
        } else if (nums[i] > secondBig) {
            secondBig = nums[i];
        }

    }
    return secondBig;
}
let test = [1, 2, 3, 4, 5]
// let test = [19,9,11,0,12]
console.log("findSecondBiggest", findSecondBiggest(test));

// question 13
function printFibo(n, a, b) {
    let fibArray = [];
    fibArray.push(a);
    if (n > 1) {
        fibArray.push(b);
    }
    while (n > fibArray.length) {
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
    }
    return fibArray;

}
console.log("printFibo", printFibo(10,0,1));