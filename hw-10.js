// Задание 1

const number = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    if (number[i]===10) {
        break;
    }
    
}

// Задание 2

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]===4) {
        console.log(i);
        break;
    }
    
}

// Задание 3

const numb = [1, 3, 5, 10, 20];

console.log(numb.join(' '));

// Задание 4

const numbs = [];

for (let i = 0; i < 3; i++) {
    const numbs2 = [];
    for (let i = 0; i < 3; i++){
        numbs2.push(1);
    }
    numbs.push(numbs2);
}

console.log(numbs);

// Задание 5

const number1 = [1, 1, 1];
number1.push(2, 2, 2);
console.log(number1);

// Задание 6

const numbers = [9, 8, 7, 'a', 6, 5];
numbers.sort();
console.log(numbers);
const filteredNumbers = numbers.filter(numbers => numbers !== 'a');
console.log(filteredNumbers);

// Задание 7

// const number2 = [9, 8, 7, 6, 5];
// const userNamber = +prompt('Введите число');

// if (number2.includes(userNamber)){
//     alert('Угадал!')
// } else{
//     alert('Неугадал!');
// }

// Задание 8

let text = 'abcdef';
let splitText = text.split('');
splitText.reverse();
let joinedText = splitText.join(" ");
console.log(joinedText);

// Задание 9

const number3 = [[1, 2, 3],[4, 5, 6]];
const newNumber3 = [];

for (let i = 0; i < number3.length; i++) {
    newNumber3.push(...number3[i]);
}

console.log(newNumber3);

// Задание 10

const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i + 1]) {
        console.log(randomNumbers[i] + randomNumbers[i + 1]);
    }
}

// Задание 11

function square(arr) {
    return arr.map(i => i ** 2);
}

console.log(square([2, 6, 8]));

// Задание 12

function wordsLength(arr) {
    return arr.map(item => item.length);
}

console.log(wordsLength(['hello', 'world', 'people']));

// Задание 13

function negativeNumbers(array) {
    return array.filter(item => item < 0);
}

console.log(negativeNumbers([1, 3, -5, 6, -1, -3, 9, -7, 8]));

// Задание 14

function randomNamber() {
    return Math.floor(Math.random() * 10);
}

const array = [];

for (let i = 0; i < 10; i++) {
    array.push(randomNamber());
}

console.log(array);

const evenAray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenAray.push(array[i]);
    }   
}

console.log(evenAray);

// Задание 15

function randomNamber2() {
    return Math.floor(Math.random() * 10);
}

const array1 = [];


for (let i = 0; i < 6; i++) {
    array1.push(randomNamber2());
}



console.log(array1);

console.log(array1.reduce((a, b) => a + b) / array1.length);