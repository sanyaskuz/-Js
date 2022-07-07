// <!-- задание 1 -->
// $(function(){
//   $('.container').css({
//     'display':'flex',
//     'flex-wrap': 'wrap',
//     'justify-content': 'space-around',
//     'margin-top': '15px'
//   });
//   $('.selector').css('border','1px solid black');
//   $('.green').css({
//     'background-color':'aqua',
//     'width': '100px',
//     'height': '50px',
//     'text-align': 'center'
//   });
//   $('.orange').css({
//     'background-color':'orange',
//     'width': '100px',
//     'height': '50px',
//     'text-align': 'center'
//   });
//   $('.yellow').css({
//     'background-color':'yellow',
//     'width': '100px',
//     'height': '50px',
//     'text-align': 'center'
//   });
//   $('.red').css({
//     'background-color':'rgb(255, 0, 195)',
//     'width': '100px',
//     'height': '50px',
//     'text-align': 'center'
//   });
//   $('h1').css('text-align', 'center');
// });
// $(function(){
// $('#red').click(function(){
//   $('.red').css('box-shadow', '0 16px 10px -4px rgb(255, 0, 195');
// });
// $('#green').click(function(){
//   $('.green').css('box-shadow', '0 16px 10px -4px rgb(0,255,255');
// });
// $('#orange').click(function(){
//   $('.orange').css('box-shadow', '0 16px 10px -4px rgb(255,165,0)');
// });
// $('#yellow').click(function(){
//   $('.yellow').css('box-shadow', '0 16px 10px -4px rgb(255,255,0)');
// });
// });
// <!-- задание 2 -->
$(function(){
  
  $('.container').css({
    'display':'flex',
    'background-color': 'rgb(0, 162, 255)',
    'width' : '360px'
  });
  $('div','.container').css({
    'margin': '5px',
  });
  $('a').css('text-decoration','none');
  $('.block').css({
    'display':'flex',
    'width' : '358px',
    'border':'1px solid black'
  });
  
});
$(function(){
  // $('.none').css('display','block');
  $('a','.Mango').click(function(){
    $('.none').show();
    $('.none').css('display','block');
    let img = document.getElementById('img');
    img.src = "./img/mango.jpeg" ;
    let h1 = document.getElementById('h1');
    h1.innerText = 'Mango';
    let text = document.getElementById('text');
    text.innerText = 'From Portuguese manga, from Malay mangga. First used for the fruit as early as the 1580s and the tree by the 1670s.[1][2] Ultimately from a Dravidian language[3] (reconstructed Proto-Dravidian *maṯ-kāy (“unripe mango”), a compound of *mā-m (“mango tree”) + *kāy (“unripe fruit”)[4]); Oxford English Dictionary says it ultimately stems from Malayalam മാങ്ങ (māṅṅa, “unripe mango”) (മാവ് (māvŭ, “mango tree”) + കായ (kāya, “unripe fruit”)),[2] while the Online Etymology Dictionary points to Tamil மாங்காய் (māṅkāy, “unripe mango”) (மா (mā, “mango”) + காய் (kāy, “unripe fruit”)).[1] The etymology of the -o ending is not certain.[2]';
    });
});










