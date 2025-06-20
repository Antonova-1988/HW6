// Угадай число

function guessGame() {
    const guessNumber = Math.floor(Math.random() * 100) + 1;
    
    while(true) {
        const userInput = (prompt('Угадай число от 1 до 100'));

        if (userInput === null) {
            alert ('Игра завершена!');
            return;
        }

        const userNumber = Number(userInput);

        if (isNaN(userNumber)) {
            alert('Пожалуйста, введите число.');
            continue;
        }

        if (userNumber < 1 || userNumber > 100) {
            alert ('Число должно быть в диапазоне от 1 до 100.');
            continue;
        }

       if (userNumber === guessNumber){
            alert (`Верно! Загаданное число ${guessNumber}! Молодец!`);
            break;
        } else if (userNumber < guessNumber){
            alert ('Неверно! Число должно быть больше.');
        } else {
            alert ('Неверно! Число должно быть меньше.');
        }
            
    }
}

// Простая арифметика

function arithmeticGame() {
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let result; 
    let userAnswer; 
    
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    switch (operator) {
        case '+':
            userAnswer = prompt(`Найдите сумму ${a} и ${b}`);
            result = a + b;
            break;
        case '-':
            userAnswer = prompt(`Надите разность ${a} и ${b}`);
            if (a > b) {
                result = a - b;
            } else {
                result = b - a;
            }
            break;
        case '*':
            userAnswer = prompt(`Найдите произведение ${a} и ${b}`);
            result = a * b;
            break;
        case '/':
            userAnswer = prompt(`Найдите частное ${a} и ${b}`);
            if (a > b) {
                result = a / b;
            } else {
                result = b / a;
            }
            break;
    }

    if (userAnswer === null) {
        alert ('Игра завершена.');
        return;
    } 
    if (userAnswer.trim() === ''){
        alert ('Вы ничего не ввели.');
        return;
    }

    if (Number(userAnswer) === result) {
        alert ('Ответ верный!');
    }else {
        alert ('Ответ неверный!');
    }   
}

// Переверни текст

function flipText() {
    let userText = prompt('Введите любой текст');
    
    if (userText === null) {
        alert ('Игра завершена.');
        return;
    } 
    if (userText.trim() === ''){
        alert ('Вы ничего не ввели.');
        return;
    }

    let textChange = userText.split('').reverse().join(" ");
    alert (textChange);
}

// Викторина

function simpleQuiz() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let num = 0;
    for (let i = 0; i < quiz.length; i++) {
        let input = prompt(`Выбери правильный ответ: \n${quiz[i].question} \n${quiz[i].options.join('\n')}`);
         
        if (input === null) {
            alert('Игра завершена.');
            return;
        }

        if (input.trim() === '') {
            alert('Вы ничего не ввели.');
            return;
        }

        let quizAnswer = Number(input);

        if (isNaN(quizAnswer)) {
            alert('Пожалуйста, введите числовой ответ.');
            return;
        }
        
        if (quizAnswer === quiz[i].correctAnswer) {
            num++;
            alert('Овет верный')
        } else {
           alert('Ответ неверный') 
        }
    }
    alert(`Количество правильных ответов: ${num}.`)
}

// Камень, ножницы, бумага

function RockScissorsPaper() {

    const options = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerPlay = options[randomIndex];
    
    const playerInput =  prompt ('Выбирете и введите одно из значений: "Камень","Ножницы" или "Бумага"');
    
    if (playerInput === null) {
        alert('Игра завершена.');
        return;
    }

    if (playerInput.trim() === ''){
        alert('Вы ничего не ввели.');
        return;
    }
    const playerAnswer = playerInput.toLowerCase();

        if (playerAnswer === 'камень' || playerAnswer === 'ножницы' || playerAnswer === 'бумага') {
            switch (computerPlay) {
                case 'камень':
                    if (playerAnswer === 'ножницы') {
                        alert(`Вы проиграли! Компьютер выбрал: ${computerPlay}`); // Камень бьет ножницы
                    } else if (playerAnswer === 'бумага') {
                        alert(`Вы выиграли! Компьютер выбрал: ${computerPlay}`); // Бумага бьет камень
                    } else {
                        alert('Ничья');
                    }
                    break;
                case 'ножницы':
                    if (playerAnswer === 'бумага') {
                        alert(`Вы проиграли! Компьютер выбрал: ${computerPlay}`); // Ножницы бьют бумагу
                    } else if (playerAnswer === 'камень') {
                        alert(`Вы выиграли! Компьютер выбрал: ${computerPlay}`); // Камень бьет ножницы
                    } else {
                        alert('Ничья');
                    }
                    break;
                case 'бумага':
                    if (playerAnswer === 'камень') {
                        alert(`Вы проиграли! Компьютер выбрал: ${computerPlay}`); // Бумага бьет камень
                    } else if (playerAnswer === 'ножницы') {
                        alert(`Вы выиграли! Компьютер выбрал: ${computerPlay}`); // Ножницы бьют бумагу
                    } else {
                        alert('Ничья');
                    }
                    break;
                
            }
        } 

        
} 

// Генератор случайных цветов

function randomColorGenerator() {
    const changeColor = document.querySelector('.change-color');
    const gameBox = document.querySelector('.game-box');

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function changeBackgroundColor() {
        
        const randomColor = getRandomColor();
        gameBox.style.backgroundColor = randomColor;
    }

    changeColor.addEventListener('click', changeBackgroundColor);
}

