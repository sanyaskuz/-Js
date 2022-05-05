// //задания 1)
// let str = 'sanya12[{2;';
// let arr = '[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20]';
// let str1 = '[a, q, w, e, r, t, y, u, i, o, p, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m]';
// let arr1 = '[[, ], ;, {, }, <, >, =, -, +]'
// let count = 0, count1 = 0, count2 = 0;
// for (const iterator of str.toLowerCase()) {
//   if(arr.includes(iterator)){
//     count++;
//   }
// }
// for (const iterator1 of str.toLowerCase()) {
//   if(str1.includes(iterator1)){
//     count1++;
//   }
// }
// for (const iterator2 of str.toLowerCase()) {
//   if(arr1.includes(iterator2)){
//     count2++;
//   }
// }
// // let leng1 = str.split('').filter(a => 'asdsdqweryhfgd'.includes(a)).length;
// console.log(count, count1, count2);
//задания 2)
// let str = 'AsdAddaASDFA123123';
// function get(str){
//   let par = str.split('');

//   for(let i = 0; i < par.length; i++){
//     if('1234456789'.includes(par[i])){
//       par[i] = '_';
//     }
//     else if(par[i]>= 'A' && par[i] <= 'Z'){
//       par[i] = par[i].toLowerCase();
//     }
//     else if (par[i]>= 'a' && par[i] <= 'z'){
//       par[i] = par[i].toUpperCase();
//     }
   
//   }
   
//  return par.join('');
// }
// console.log(get(str));

//задания 3)
// let str = 'font-size';

// function getStr(str){
//   let par = str.split('-');
//   for(let i = 0; i < par.length; i++){
//     if('size'.includes(par[i])){
//       par[i] = 'Size';
      
//     }
//   }
 
//   return par.join('');
// }
// console.log(getStr(str));

//задания 4)
// let str = 'cascading style sheets';
// function getStr(str){
//   let get = str.split(' ');
//   let get1 = get[0].slice(0, 1).toUpperCase();
//   let get2 = get[1].slice(0, 1).toUpperCase();
//   let get3 = get[2].slice(0, 1).toUpperCase();
//   return `${get1 + get2 + get3}`;
  
// }
// console.log(getStr(str));
//задания 5)
// let str= 'adfsa sfsdjfn sadojasnd asdjnsajdn asfjbndsjfl skf bkasn';
// let getStr = str.split(' ').join('');
// console.log(getStr);
//задания 5)
let url = 'https://itstep.org/ua/about';
function get(url){
let getUrl = url.split( "/" );
let get1= getUrl[0];
let get2 = getUrl[2];
let get3 = getUrl[3];
let get4 = getUrl[4];

console.log(get2, get3, get1);
return `протокол : ${get1} домен : ${get2} путь : ${get3 + '/' + get4}`;
}
console.log(get(url));