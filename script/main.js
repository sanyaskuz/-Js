// Задания1
let div = document.createElement('div');
let h1 = document.createElement('h1');
document.body.style.backgroundColor = 'antiquewhite';
h1.innerHTML = 'Formated Json date';
h1.style.color = ' ';
document.body.append(h1);
div.style.display = 'flex';
document.body.append(div);
let Aria = document.createElement('textarea');
Aria.cols = '33';
Aria.id = 'textAria';
div.append(Aria);
let btn = document.createElement('button');
btn.id = 'btn';
btn.style.width = '20px';
btn.style.height = '607px';
btn.innerText = '>';
btn.style.marginLeft = '5px';
div.append(btn);
let aria = document.createElement('textarea');
aria.cols = '33';
aria.id = 'aria';
aria.style.marginLeft = '5px';
div.append(aria);
btn.addEventListener('click', function(){
let aria1 = document.getElementById('textAria').value;
let aria2 = document.getElementById('aria');
try {
 let json = JSON.parse(aria1, null,5); 
 aria2.value = JSON.stringify(json, null, 5); 
 if(aria1 === "") throw new SyntaxError("Empty");
} catch (error) {
 h1.style.color = 'red';
 h1.innerHTML = error.message;
}finally{
  aria1 ='';
}
});












