// Задания1
// let div = document.createElement('div');
// div.style.width = '100%';
// div.style.height = '620px';
// div.style.backgroundColor = 'aqua';
// document.body.append(div);
// let div1 = document.createElement('div');
// div1.style.backgroundColor = 'antiquewhite';
// div1.style.width = '150px';
// div1.style.height = '40px';
// div1.className = 'coords';
// div.appendChild(div1);
// div.addEventListener('click', function(e) { 
//   // div1.innerHTML = ;
//   console.log(e.buttons);
//   if(e.button != 1){
//     div1.innerHTML = 'Левая конпка миши' + 'X =' + e.clientX   + ',' + 'Y =' + e.clientY ;
//   }else
//   if(e.button == 2){
//     div1.innerHTML = 'Правая конпка миши' + 'X =' + e.clientX   + ',' + 'Y =' + e.clientY ;
//   }else
//   if(e.button == 4){
//     div1.innerHTML = 'средняя конпка миши' + 'X =' + e.clientX   + ',' + 'Y =' + e.clientY ;
//   }
// });
// // Задания 2;
// let input = document.createElement('input');
// let h3 = document.createElement('h3');
// h3.innerText = 'Ваше імя';
// document.body.append(h3);
// input.type = 'text';
// input.name = 'Ваше імя';
// document.body.append(input);
// input.addEventListener('keypress',function(e){
//   if ("1234567890".indexOf(e.key) != -1)
//     e.preventDefault();
// });
// Задания 3
let btn = document.getElementById('btn');
let oneDiv = document.getElementById('oneDiv');
let twoDiv = document.getElementById('twoDiv');
let threeDiv = document.getElementById('threeDiv');
oneDiv.style.backgroundColor = 'red';
twoDiv.style.backgroundColor = 'darkgrey';
threeDiv.style.backgroundColor = 'darkgrey';
btn.addEventListener('click', trafficLight, false);
function trafficLight(){
  if(oneDiv.style.backgroundColor == 'red'){
      oneDiv.style.backgroundColor = 'darkgrey';
      twoDiv.style.backgroundColor = 'yellow';
  }else 
  if( twoDiv.style.backgroundColor ==  'yellow'){
    twoDiv.style.backgroundColor = 'darkgrey';
    console.log(twoDiv.style.backgroundColor);
    threeDiv.style.backgroundColor = 'green';
  }else
  if(threeDiv.style.backgroundColor == 'green'){
    threeDiv.style.backgroundColor = 'darkgrey';
    oneDiv.style.backgroundColor = 'red';
  }
  
 
  
};







