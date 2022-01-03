// Задание №1
// let age = prompt('Укажите ваш возраст')
// if (age <= 2) {
//     alert ('you child')
// } else if (age <= 18) {
//     alert ('You are a teenager')
// } else if (age <= 60) {
//     alert ('You are an adult')
// } else {
//     alert ('You are a pensioner')
// }


// Задание №2
// let number = prompt('Укажите число от 0-9')

// if (number == 0) {
//     alert ('Ваш символ )')
// } else if (number == 9) {
//     alert ('Ваш символ (')
// } else if (number == 8) {
//     alert ('Ваш символ *')
// } else if (number == 7) {
//     alert ('Ваш символ &')
// } else if ( number == 6) {
//     alert ('Ваш символ ^')
// } else if (number == 5) {
//     alert ('Ваш символ %')
// } else if (number == 4) {
//     alert ('Ваш символ $')
// } else if (number == 3) {
//     alert ('Ваш символ #')
// } else if (number == 2) {
//     alert ('Ваш символ @')
// } else if (number == 1 ) {
//     alert ('Ваш символ !')
// } else {
//     alert ('Число указано не верно')
// }





// Задание №3
// let number = +prompt( 'Введите трехзначное число: ');
// let number1 = parseInt(number / 100);
// console.log(number1)
// let number2 = parseInt(number / 10) % 10;
// console.log(number2)
// let number3 = number % 10;
// console.log(number3)
// if(number1===number2 || number2===number3 || number1===number3)
// alert('Найдено совпадение цифр');
// else
// alert('Совпадений не найдено');
// я смог это решить так но с помощю подсказки в интернее и не совсме разобрался как 
// работает parseInt но я понял что оно делает  число целым и даже при строке если строка начинается с числа  но без него оно не работает  






// Задача №4
// let year = prompt('Укажите год')

// if (year % 4 == 0) {
//     console.log(year % 4 == 0);
//     alert ('Этот год высокосный')
// } else if (year % 100 != 0) {
//     console.log(year % 100 != 0);
//     alert ('Этот год не высокосный')
// } else if (year % 400 ==0) {
//     alert ('Этот год высокосный')
// } else {
//     alert ('Этот год не высокосный')
// }





// Задача № 5
let number = prompt('Укажите число')
let x = 0 ;
while (number > x){
    x *= 10;
    x += number % 10;
    number = Math.trunc(number /10);
}
if (number == x){
    alert ('Ваше число полиндром')
} else if (number == Math.trunc(x /10)) {
    alert ('Ваше число полиндром')
} else {
    alert ('Ваше число не полиндром')
}








