//Задание №1
// const num1 = +(prompt('Укажите  число'))
// const num2 = +(prompt('Укажите  число'))

// function numberCheck () {
//   if(num1 > num2) {
//     console.log('-1')
//   }else
//   if(num1 < num2){
//     console.log('1')
//   }else 
//   {
//     console.log((num1 == num2),  '0')
//   }
// }
// numberCheck(console.log())
//Задание №2
// function factorial(n){
//   return (n != 1) ? n * factorial(--n) : 1;

// }

// console.log(factorial(5))
//Задание №3
// function addNumbers(n,  b, c){
//   return n + b + c;
// }

// console.log(addNumbers('1', '2', '3'))
//Задание №4
// let s = 0
// function findingArea(a = b, b = a){
//   return s = a * b
  
// }
// console.log(findingArea(2,7))
//Задание №5
function fnnumberExcellent(num){
  let sum = 0;
  let reminder;
  for( let i = 1; i < num - 1; i++){
    reminder = num % i;
    if(reminder === 0){
      sum += i
    }
  }
   if(num === sum) {
    console.log(num + ' : - Совершенное число!')
   }else{
     console.log('Это не совершенное число!')
   }

  }

fnnumberExcellent(28)


