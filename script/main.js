//Задание №1

// do {
//     let num1 = +(prompt('Укажите число: '));
//     let num2 = +(prompt('Укажите число: '));
//     let sign = (prompt('Укажите знак : + - / *'))
//        switch (sign) {
//            case '+':
//                alert(num1 + num2);
//                break;
//             case '-':
//                 alert(num1 - num2);
//                 break;   
//             case '*':
//                 alert(num1 * num2);
//                 break;    
//             case '/':
//                 alert(num1 / num2);
//                 break;   

//            default:
//                break;
//        }
    
//     }while(confirm('Хотите решить еще один пример ?'))


//Задание №2
// let num = prompt('Укажите число :');
// let move = prompt('На скалько цыфр сдвинуть');

// function shift(num, move) {
   
   
//     let i = num.length > 0 ? move % num.length : 0;
   
//     return alert(num.slice(i) + num.slice(0, i))
//   }
 
//   shift(num, move)
  

//Задание №3


// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//   currDay = (currDay + 1) % days.length;
// }

//Задание №4
 
// document.write("<h1>Таблица умножения</h1>"); 
 
// for (j = 2; j <= 9; j++){  
// document.write("<div style='float: left; width: 70px;'>"); 
// for (i = 2; i <=9; i++)  
// { 
// document.write(i + "*" + j + "=" +(i*j) + "<br>"); 
 
// }  
// document.write ("</div>"); 
// }
//Задание №5

