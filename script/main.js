//Задание №1
// let a = +(prompt('Укажите начало диапозона чисел'))
// let b = +(prompt('укажите конец диапазона чисел'))
// let sum = 0
// while(a <= b){
//     if(a > b)  break;
//     sum += a
//     a++
//     console.log(sum)
    
// }
// Задача №2
// let a = +(prompt('Первое число'))
// let b = +(prompt('Второе число'))
// let i;
// while (a!=b) {
//     if (a > b) {
//         a = a - b;
//     }
//     else {
//         b = b - a;
//     }
// }

// alert(i = a)
// Задача № 3
// let a = +(prompt('Укажите число'));

// for (let i = 1; i <= a; i++) {
//   if (a % i == 0 ) {

//     console.log(i)
    
//   }
  
  
// }
// Задача №4
// let a = prompt('Введите число : ')
// for (let i = 0; i < a.length; i++) {
//     const b = a.length;
//     console.log(b)

// }
//   Задача №5
let q1 = 0 , q2 = 0, q3 = 0, q4 = 0, q5 = 0;
 
let num1;

for(let i = 0; i < 10; i++)
{
    num1 = (prompt("Введите " + (i+1) + " чисел= "))

    if(num1 > 0)
    {
        q1++;
    }else
    if(num1 === 0)
    {
        q3++;
    }else
    if(num1 < 0)
    {
        q2++;
    }
    
    if(num1 % 2 == 0){
        q4++;
    }else
    if(num1 % 2 != 0){
        q5++;
    }


}

alert("Количество положительных: " + q1);

alert("Количество отрицательных: " + q2);
 
alert("Количество нулей: " + q3);

alert("Количество четных:" + q4);

alert("Количество нечетных:" +q5);






