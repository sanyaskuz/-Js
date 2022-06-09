// Задания1
let div = document.createElement('div');
div.style.backgroundColor = 'antiquewhite';
div.style.width = '400px';
div.style.height = '150px';
div.style.marginLeft = 'auto';
div.style.marginRight = 'auto';
document.body.append(div);
let h2 = document.createElement('h2');
h2.textContent = 'Регистрация';
h2.style.textAlign = 'center';
div.append(h2);
let form = document.createElement('form');
// form.setAttribute('action', '');
form.setAttribute('method', 'GET');
form.setAttribute('name', 'Form');
div.append(form);
let divMaill = document.createElement('div');
form.append(divMaill);
let labelMeil = document.createElement('label');
labelMeil.setAttribute('fro', 'Post-name');
labelMeil.innerHTML = 'Email :';
let p = document.createElement('p');
p.innerText = 'Eror';
p.style.backgroundColor = 'red';
p.style.visibility = 'collapse';
p.style.float = 'right';
// p.style.marginLeft = '10px';
let inputMaill = document.createElement('input');
inputMaill.setAttribute('id', 'Post-name');
inputMaill.type = 'email';
inputMaill.setAttribute('name','email');
divMaill.append(labelMeil);
divMaill.append(p);
divMaill.append(inputMaill);
let l = form.children[0];
let divPass = l.cloneNode(true);
divPass.children[0].innerText = 'Password :';
divPass.children[0].setAttribute('fro', 'poss');
divPass.children[2].id = 'pass';
divPass.children[2].setAttribute('name','pass');
divPass.children[2].type = 'password';
divPass.style.marginTop = '5px';
form.append(divPass);
let l1 = form.children[1];
let divPass2 = l1.cloneNode(true);
divPass2.children[0].setAttribute('fro', 'poss2');
divPass2.children[2].setAttribute('name','pass2');
divPass2.children[2].id = 'pass2';
form.append(divPass2);
let inputBtn = document.createElement('input');
inputBtn.type = 'submit';
inputBtn.value = 'Click';
form.append(inputBtn);
// form.setAttribute('onsubmit', 'return examinationForm()');
form.onsubmit = function examinationForm(e){
// e.addEventListener(); 
if(divPass.children[2] !== divPass2.children[2]){
  p.style.visibility = 'visible';
  return false;
}
return true;
};













