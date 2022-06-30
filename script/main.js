// Задания1
let body = document.body;
let divInput = document.createElement('div');
divInput.style.backgroundColor = 'lawngreen';
let form = document.createElement('form');
form.style.marginLeft = '76px';
let forInput;
let inputOne = document.createElement('input');
inputOne.style.marginTop = '40px';
inputOne.style.display = 'block';
inputOne.type = 'text';
inputOne.style.width = '200px';
let inputTwo = document.createElement('input');
inputTwo.style.marginTop = '50px';
inputTwo.style.display = 'block';
inputTwo.type = 'text';
inputTwo.style.width = '200px';
let Btn = document.createElement('button');
Btn.style.display = 'block';
Btn.style.width = '150px';
Btn.style.height = '30px';
Btn.style.marginTop = '50px';
Btn.style.marginLeft = '100px';
Btn.style.borderRadius = '25%';
Btn.innerText = 'Click My!';
Btn.style.color = 'slateblue';
body.style.backgroundColor = 'antiquewhite';
body.append(divInput);
divInput.append(form);
divInput.style.backgroundColor = 'aqua';
divInput.style.width = '350px';
divInput.style.height = '250px';
divInput.style.border = '1px solid black';
divInput.style.borderRadius = '25%';
// divInput.style.marginTop = '0';
divInput.style.margin = '0 auto';
divInput.style.textAlign = 'center';
form.append(inputOne);
form.append(inputTwo);
form.after(Btn);

Btn.addEventListener('click', function(){
  let valueOne = inputOne.value;
  let valueTwo = inputTwo.value;
  let url = `http://www.omdbapi.com/?apikey=6d0934bb&t=${valueOne}&y=${valueTwo}&type=movie`;
  get(url)
  .then(function(text){

  let divText = document.createElement('div');
  divText.style.marginLeft = '25px';
  let divImg = document.createElement('div');
  divImg.style.marginLeft = '25px';
  let divFlex = document.createElement('div');
  divFlex.style.display = 'flex';
  divFlex.style.marginTop = '30px';
  divFlex.style.border = '1px solid bleck';
  divFlex.style.backgroundColor = 'lawngreen';
  let h1Titel = document.createElement('h1');
  let releaseYear = document.createElement('p');
  let genre = document.createElement('p');
  let Poster = document.createElement('img');
  let btnOpetnNewHtml = document.createElement('button');
  btnOpetnNewHtml.id = 'btnOpetnNewHtml';
  btnOpetnNewHtml.innerText = 'Details';
  Poster.style.width = '150px';
  Poster.style.height = '200px';

  divText.append(h1Titel);
  divText.append(releaseYear);
  divText.append(genre);
  divText.append(btnOpetnNewHtml);
  divImg.append(Poster);
  divFlex.append(divImg);
  divFlex.append(divText);
  document.body.append(divFlex);

  btnOpetnNewHtml.addEventListener('click', function(){
    document.cookie = `http://www.omdbapi.com/?apikey=6d0934bb&t=${valueOne}&y=${valueTwo}&type=movie; expires=Thur, 30 Month 2022 13:00:00`;
    window.open('comment.html' );
  });

    var parsJson = JSON.parse(text);
    console.log(parsJson);
    Poster.src = parsJson.Poster;
    h1Titel.innerHTML = parsJson.Title;
    releaseYear.innerHTML = parsJson.Year;
    genre.innerHTML = parsJson.Genre;
  },function(error){
    alert('error');
    alert(error);
  });
});

function get(url){
  return new Promise(function(succeed, fail){
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", function(){
      if(request.readyState == 4 && request.status == 200){
      succeed(request.responseText);
      }else
      fail(new Error("Fail"));
      
    });
    request.addEventListener('error', function(){
      fail(new Error('Ошибка'));
    });
    request.send();
  });
}














