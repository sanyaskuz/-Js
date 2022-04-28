// Задание 1)
// let a = 'asdfgad'
// let b = 'dfgddda'
// function returnLongerStr(str1, str2){
//   if(str1.length > str2.length){
//     return 1;
//   }else 
//   if(str1.length  < str2.length ){
//     return -1;
//   }else
//   if(str1.length  === str2.length ){
//     return 0;
//   }

// }
// console.log(returnLongerStr(a, b))
// Задание 2)

// let str = 'sanya'
// function myFunc(a) {
//   let str2 = a.substr(0, 1).toUpperCase() + a.substr(1).toLowerCase();
//   return str2
// }
// console.log(myFunc(str));

// Задание 3)
// let str = "alishfciahsbxamndjqz";
// let str1 = ["a", "e", "i", "o", "u", "y"];
// let str3 = str.split('');
// let str2 = str3.filter(t => str1.includes(t));
// let count = str2.length;
// alert(str2 +',' + count);



//Задание 4)
// let str = 'т dasdasd уВеличение продаж';
// let text = 'увеличЕние продаж'
// function myFunc(a, b){
//  return a.toLowerCase().includes(b.toLowerCase());
  
// }
// console.log(myFunc(str, text))

  //Задание 5)
//   let str = "Hello, world!";
//   let str3 = "...";
//   function getText(){
//   let str2 = str.slice(0,8);
//   let str4 = str2 + str3;
//   return str4;
//   }
  
 
// console.log(getTaxt())

//Задание 6)
// let str = "саня"
// function getText(){
//  let str1 = str.split('').reverse().join('');
//  if(str === str1){
//    return "true"
//  }else
//  if(str != str1){
//    return "False"
//  }

// }
// console.log(getText())
//Задание 7)

// let text = "text no is";
// function getText(){
//   let text1 = text.split(' ');
//   return text1.length;

// }
// console.log(getText())
//Задание 8)

// let text = "text";
// let str = "geterj"

// function getText(){
//   if(text.length > str.length){
//     return `${text}`
//   }else
//   if(text.length < str.length){
//     return `${str}`
//   }
  

// }
// console.log(getText())
//Задание 9)
// let arr = [];
// let text = "Hello, worldw"
// let arr1 = [];
// for(let a of text){
//   arr1.push(a)
// }
// let arr2 = arr1;
// console.log(arr2)
//  let letter = 'w'
//  let a = arr2.indexOf(letter);
//  while(a != -1) {
//   arr.push(a);
//   a = arr2.indexOf(letter, a + 1);
//  }
  
//  console.log(arr)
//Задание 10)

let a = 'adnaj asndjlasn asmxasc sckc'


function get(){
  let s = a.split(' ');
  let b = s.length;
  let c = s.join('').split('');
  let q = c.length;
  
  let r = Math.floor(q / b);
   return console.log( `Длинна :   ${ r}`)

}

console.log(get())


