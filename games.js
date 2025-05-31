// Угадай число

function guessGame() {
    const guessNumber = Math.floor(Math.random() * 100) + 1;
    
    while(true) {
        const userNumber = +(prompt('Угадай число от 1 до 100'));

        if (userNumber === null) {
            alert('Игра завершена!');
            return;
        }

       if (userNumber === guessNumber){
            alert (`Верно! Загаданное число ${guessNumber}! Молодец!`);
            break;
        } else if (Number(userNumber) < guessNumber){
            alert ('Неверно! Число должно быть больше.');
        } else{
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
        alert('Игра завершена!');
        return;
    }

    if (Number(userAnswer) === result) {
        alert('Ответ верный!');
    }else {
        alert('Ответ неверный!');
    }   
}

// Переверни текст

function flipText() {
    let userText = prompt('Введите любой текст');
    let textChange = userText.split('').reverse().join(" ");
    alert(textChange);
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
        let quizAnswer = Number(prompt(`Выбери правильный ответ \n${quiz[i].question} \n${quiz[i].options.join('\n')}`));
        if (quizAnswer === quiz[i].correctAnswer) {
            num++;
            alert('Овет верный')
        } else {
           alert('Ответ неверный') 
        }
    }
    alert(`Количество правильных ответов: ${num}.`)
}

