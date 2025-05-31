// Задание 1

const str = 'js';
console.log(str.toUpperCase());

// Задание 2

function filter(arr, str) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
            result.push(arr[i]);
        }
        
    }
    return result;
}

console.log(filter(['комод', 'кровать', 'стол', 'кресло'], 'к'));

// Задание 3

let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(randomNumber());

// Задание 6

function getRandom(num) {
   return Array.from({length: Math.floor(num / 2)}, () => Math.floor(Math.random() * num));
}
console.log(getRandom(10));

// Задание 7

function numbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numbers(2, 10));

// Задание 8 

console.log(new Date());

// Задание 9

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10

function formatDate(date) {
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = weekDays[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    return `Дата: ${day} ${months[month]} ${year} - это ${dayOfWeek}. Местное время: ${hours}:${minutes}:${seconds}.`;
}
console.log(formatDate(new Date()));