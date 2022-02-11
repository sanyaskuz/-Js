//Задание №1
// let result = [];
// function getPerfect(a, b) {
  
//   for (let i = a; i < b; i++) {
//     sum = 0;
//     for (let n = 1; n <= i/2; n++) {
//       if (i % n === 0) sum += n;
//     }
//     if (i === sum) result.push(i);
//   }
//   return result;
// }
 
// console.log(getPerfect(1, 45667));
// let num = 8;
//  let perfect = result.includes(`${num}`)
// if(perfect == true ){
//   console.log(`${num}`, ': Ваше число совершенное')}
//   else {
//     console.log(`${num}`, ': Ваше число не совершенное')
//   }
//Задание №2  


function addLeadingZero(d){
  return (d < 10) ? '0' + d : d ;
}

// // function getUserTime(hours = 0, minutes = 0, seconds = 0 ){

// //   let h = addLeadingZero(hours)
// //   let m = addLeadingZero(minutes)
// //   let s = addLeadingZero(seconds)
// //   return `${h}:${m}:${s}`
  
// // }
// // console.log(getUserTime(12,5,))

//  //Задание №3
//   function getUserTime(hours = 0, minutes = 0, seconds = 0 ){

//   let h = addLeadingZero(Math.floor( hours *= 3600))
//   let m = addLeadingZero(Math.floor( minutes *= 60))
//   let s = addLeadingZero(seconds)
//   let HMS = `${h}${m}${s}`
//   return HMS
  
// }
// console.log(getUserTime(12,5,15))

//Задание №4


//   function getUserTime(t){
//     let hours = addLeadingZero(Math.floor(t / 3600));
//     let minutes = addLeadingZero(Math.floor((t  - hours * 3600 ) / 60));
//     let seconds = addLeadingZero(Math.floor((((t  - hours * 3600 ) / 60) - minutes) * 60));
//      return `${hours}:${minutes}:${seconds}`
// }

// console.log(getUserTime(63070000000))
//Задание №5

const day = 0;
const months = 0;
const year = 2002;
const day1 = 0;
const months1 = 0;
const year1 = 2001;

function getUserTime(day , months , year , day1 , months1 , year1 ){
  let d = Math.floor(day * 86400);
  let m = Math.floor(months * 2628e6);
  let y = Math.floor(year * 8760);
  let y3 = Math.floor(y * 3600);
  let soma = d + m + y3;
  console.log(soma)
  //63143080000000
  let d1 = Math.floor(day1 * 86400);
  let m1 = Math.floor(months1 * 2628e6);
  let y1 = Math.floor(year1 * 8760);
  let y2 = Math.floor(y1 * 3600)
  let soma1 = d1 + m1 + y2;
  console.log(soma1)
  //63111540000000

  let t = soma - soma1 ;
  console.log(t)
  let hours = addLeadingZero(Math.floor(t / 3600));
  let minutes = addLeadingZero(Math.floor((t  - hours * 3600 ) / 60));
  let seconds = addLeadingZero(Math.floor((((t  - hours * 3600 ) / 60) - minutes) * 60));
   return `'Разніца между дадами составляет :' ${hours}:${minutes}:${seconds} 'часа'`
  
  
}
console.log(getUserTime(day, months, year, day1, months1, year1))
//но эта функция не учитывает высокостный год это нужно делать с new Data но я не сильно пока разобрался во времени 
//Прошу указать если что то не правильно просто что то закрадываеться сомнения 










 






