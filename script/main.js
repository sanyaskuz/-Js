//Задание 1
// let car = {
//   brand: 'Honda',
//   model: 'Civic 4D',
//   'Year of issue': 2021,
//   'Average speed': 110,
// }
//задание 1/1
// function getDescriptionCar(){
//   for(let key in car){
//     console.log(key)
//     // container.insertAdjacentHTML('afterbegin', `${key}` + ':' + `${car[key]}` )
//     let liFirst = document.createElement('li')
//     liFirst.innerHTML = `${key} ` + ': ' +  ` ${car[key]}`
//     ul.append(liFirst)
//   }

// }

// getDescriptionCar()
//задание 1/2
// const speed = car['Average speed'];
// const distance = 1750;

// function addLeadingZero(d){
//   return (d < 10) ? '0' + d : d ;
// }

// function getTravelTime(){
//   let time = distance / speed;
//   let t = time * 3600
//   return t

// }
// function getUserTime(t){
//       let hours = addLeadingZero(Math.floor(t / 3600));
//       let h = Math.floor(hours / 4);
//       let hour = hours + h;
//       let minutes = addLeadingZero(Math.floor((t  - hours * 3600 ) / 60));
//       let seconds = addLeadingZero(Math.floor((((t  - hours * 3600 ) / 60) - minutes) * 60));
//       div.innerHTML  = `${hour}:${minutes}:${seconds}`;
// }


// getUserTime(getTravelTime())

//задание 2

const Calculator = {
  num1: +(prompt('number1')),
  num2: +(prompt('number2')),
  sign: prompt('Indicate sign : + , - , / , * , **', ' ' ) ,
  Calculate: function(){
    if([this.sign] == '*'){
      return [this.num1] * [this.num2];
       
      
    }else 
    if([this.sign] == '-'){
    return [this.num1] - [this.num2];
       
    }else
    if([this.sign] == '/'){
      return [this.num1] / [this.num2]
    }else
    if([this.sign] == '+'){
      return +([this.num1]) + +([this.num2]);
    }else
    if([this.sign] == '**'){
      return [this.num1] ** [this.num2]
    }else{
      return 'Eror'
    }
  }
  


}
console.log(Calculator.Calculate())











 






