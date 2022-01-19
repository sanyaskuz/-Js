//Задание №1
let a = +(prompt('Укажите начало диапозона чисел'))
let b = +(prompt('укажите конец диапазона чисел'))
let sum = 0
while(a <= b){
    if(a > b)  break;
    sum += a
    a++
    console.log(sum)
    
}
