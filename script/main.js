// Задания1
class Comment{
  constructor(nam, dat, comm){
    this.name = nam;
    this.date = dat;
    this.comment = comm;
  }
}
let Com = [];
let date = new Date;
btnOK.addEventListener('click', function(){
  name1.innerText = document.getElementById('InpName').value;
  comments.innerText = document.getElementById('comment').value;
  dat1.innerText = date.toLocaleTimeString()+' '+date.toLocaleDateString();
 let Comen = new Comment(name1.innerText, dat1.innerText, comments.innerText);
   Com.push(Comen);
});
btnShow.addEventListener('click', function(){
  let newWin = window.open('comment.html');
  newWin.obj = Com;
  console.log(newWin);
});