// Задания1
// let a = document.getElementById('text');
// function addMessage(msg){
//   a.innerHTML += msg + '<br/>';
// }
// Задания2
let a = document.getElementById('GET');

window.onbeforeunload = function(e){
  if(a.value.length > 0){
    let msg = 'Text not saved';
    e.returnValue = msg;
    return msg;
  }
  return null;
};