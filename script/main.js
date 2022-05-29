// Задания1
let tableContainer = document.getElementById('tableContainer');
createTabel(tableContainer, 7, 5);
function createTabel(parent, cols, rows){
 let tabel = document.createElement('tabel');
 tabel.style.borderCollapse = 'collapse';
//  tabel.style.border = '1px solid black';
 tabel.style.textAlign = 'center';

 for(let i = 0; i < rows;i++){
 let tr = document.createElement('tr');
  for(let j = 0; j < cols; j ++){
  let e;
  if(i === 0){
    e = document.createElement('th');
    e.innerText = 'th';
    e.style.padding = "10px 20px";
    e.style.border = '3px solid black';
    tr.appendChild(e);
    
  }else{
    e = document.createElement('td');
    e.innerText = 'td';
    e.style.padding = "10px 20px";
    e.style.border = '2px solid black';
    tr.appendChild(e);
  }
  tabel.appendChild(tr);
  }
  parent.appendChild(tabel);

 }
 colorEvent();
}

function colorEvent(){
 let tr = document.querySelectorAll('td');
 tr.forEach((el) =>{
   el.addEventListener('mouseover', () =>{
     el.style.backgroundColor = 'red';
   });
   el.addEventListener('mouseleave', () =>{
     el.style.backgroundColor = '';
   });
 });

}

// Задания2

// function getP(){
//   for(let i = 0; i < 20 ; i++){
//   let p = document.createElement('p'); 
//   p.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magni harum nesciunt illo alias explicabo nam repudiandae. Accusantium dolorem accusamus eveniet, in voluptatibus velit expedita tempora nam eum provident quos enim qui repellat rem deleniti nobis eius quasi voluptas error quam quibusdam? Doloribus, similique! At pariatur laborum quidem. Recusandae, doloribus';
//   document.body.appendChild(p);
//   }
// }
// getP();

//   let btn = document.createElement('button');
//   btn.innerText = 'UP';
//   document.body.appendChild(btn);
//   window.addEventListener('scroll', function(){
//     if(window.pageYOffset > this.document.documentElement.clientHeight){
//       btn.style.display = 'block';
//     }else{
//       btn.style.display = 'none';
//     }
//   });
//   function Up(){
//   if(window.pageYOffset > 0){
//     window.scroll(0, -100);
//     setTimeout(Up(), 2000);
//   }
// }
// btn.setAttribute('onclick', "Up()");


