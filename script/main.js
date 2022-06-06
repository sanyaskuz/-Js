// Задания1

// while(true){
//   let prom = prompt('Yor Text');
//   if(!prom) break;
//   let li = document.createElement('li');
//   li.innerText = prom;
//   UL.append(li);
  
 
// }
// Задания2
// let p = document.createElement('p');
// p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores cupiditate autem nemo harum delectus alias eveniet doloremque quaerat. Quis voluptas harum hic laudantium architecto officiis aliquam asperiores molestias illum voluptatem! Asperiores veniam officiis ab, rerum molestiae reiciendis quaerat. Blanditiis, fugit. Excepturi eligendi, eius incidunt voluptate optio veniam minus laboriosam nobis sapiente odio tenetur porro delectus iure expedita aperiam temporibus deleniti? Saepe consectetur expedita amet ut, at quis suscipit necessitatibus repellendus, iste earum dolore neque porro! Provident distinctio id asperiores adipisci atque maxime, incidunt aliquid nobis expedita doloremque. Mollitia blanditiis placeat quisquam tempora minus temporibus.';
// p.className = 'p1';
// p.id = 'p2';
// document.body.append(p);
// window.oncontextmenu = function(){
//   return false;
// };
// window.onselectstart = function(){
//   return false;
// };
// Задания3


    let div = document.createElement('div');
    let div2 = document.createElement('div');
    document.body.appendChild(div);
    document.body.appendChild(div2);
    div.style.display = 'Flex';
    div2.style.display = 'Flex';
    div.style.marginLeft = '4px';
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createTextNode(' : ');
    let p5 = document.createElement('p');
    p5.append(p4);
    let p6 = document.createTextNode(' : ');
    let p7 = document.createElement('p');
    p7.append(p6);
    p5.style.fontSize = '20px';
    p7.style.fontSize = '20px';
    p.style.color = 'red';
    p.style.fontSize = '20px';
    p2.style.color = 'blue';
    p2.style.fontSize = '20px';
    p3.style.color = 'green';
    p3.style.fontSize = '20px';
    p.innerText = 'hh';
    p2.innerText = 'min';
    p3.innerText = 'sec';
    // document.body.style.display = 'flex';
     let h = div.append(p);
     div.append(p5);
     let m = div.append(p2);
     div.append(p7);
     let c = div.append(p3);
     let btn = document.createElement('button');
    //  btn.type = 'button';
     btn.style.width = '50px';
     btn.innerText = 'Start';
     btn.style.height = '20px';
     btn.style.backgroundColor = 'antiquewhite';
     btn.style.color = 'bleck';
     let btn2 = document.createElement('button');
    //  btn2.type = 'button';
     btn2.innerText = 'Stop';
     btn2.style.width = '50px';
     btn2.style.height = '20px';
     btn2.style.marginLeft = '5px';
     btn2.style.backgroundColor = 'red';
     div2.appendChild(btn); 
     div2.appendChild(btn2);

     btn.addEventListener('click',getTime);

     let timer;
  function getTime(){
    let date = new Date();
    let time = [date.getHours(),date.getMinutes(),date.getSeconds()];
    if(time[0]<10){
       time[0] = '0' + time[0];
      }
    if(time[1]<10){
      time[1] ='0' + time[1];
    }
    if(time[2]<10){ 
      time[2] ='0' + time[2];
    }
    p.innerText = time[0];
    p2.innerText = time[1];
    p3.innerText = time[2];
    console.log(time);
    timer = setTimeout("getTime()",1000);
   
    
  }
  btn2.addEventListener('click',endTime);
  function endTime(){
    clearInterval(timer);
  }
 






