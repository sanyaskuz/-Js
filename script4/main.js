let number = prompt('Укажите трехзначное число')
let result = 0;

// я нашел такое решение в интернете 
// я не сильно понял как это работает если у вас есть возможно то опишите пожалуйса мне это в коментариях

// while это как я понял цыкыл который будет продолжаться пока его не закончить 
while (number) {
    result *= 10;
    // мне не сильно понятно зачем мы импользовали это в результате ж будет 0 или я не прав


//    как работает % бо я не сильно понял это деление 
//    как я понял то это остаток от деления тоесть если число (156 % 10)=(6) ну как я понял 150 просто убираем и осатаеть (6)    
    result += number % 10;

    // Math.floor(это я понимаю что бы было целое число оно его округливает)

    number = Math.floor(number / 10);
}
alert(result)