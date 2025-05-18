// Угадай число

function guessGame() {
    const guessNumber = Math.floor(Math.random() * 100) + 1;
    
    while(true) {
        const userNumber = Number(prompt('Угадай число от 1 до 100'));

        if (userNumber === null) {
            alert ('Неверно!');
            return;
        } 
        
        if (userNumber === guessNumber){
            alert ('Верно! Молодец!');
            break;
        } else if (userNumber < guessNumber){
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
    let result = " ";  
    
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    switch (operator) {
        case '+':
            userAnswer = +prompt(`Найдите сумму ${a} и ${b}`);
            result = a + b;
            break;
        case '-':
            userAnswer = +prompt(`Надите разность ${a} и ${b}`);
            if (a > b) {
                result = a - b;
            } else {
                result = b - a;
            }
            break;
        case '*':
            userAnswer = +prompt(`Найдите произведение ${a} и ${b}`);
            result = a * b;
            break;
        case '/':
            userAnswer = +prompt(`Найдите частное ${a} и ${b}`);
            if (a > b) {
                result = a / b;
            } else {
                result = b / a;
            }
            break;
    }
        

        
    
    
        if (Number(userAnswer) === result) {
            alert('Ответ верный!');
        }
        else {
            alert('Ответ неверный!');
        }
}


