//Задание 3
const time = {
  
  hour: prompt('Hour'),
  minutes: prompt('Minutes'),
  seconds: prompt('Seconds'),
  addLeadingZero : function(e){ return (e < 10) ? '0' + e : e},
  getUserTime : function(Hour = 0, Minutes = 0, Seconds = 0){
    let h = Math.floor(+(Hour *= 3600));
    let m = Math.floor(+(Minutes *= 60));
    let s = Math.floor(+(Seconds));
    let HMS = h + m + s;
    let hours = this.addLeadingZero(Math.floor(HMS / 3600));
    let minutes = this.addLeadingZero(Math.floor((HMS  - hours * 3600 ) / 60));
    let seconds1 = this.addLeadingZero(Math.floor((((HMS  - hours * 3600 ) / 60) - minutes) * 60));
    
    return document.body.insertAdjacentHTML("afterbegin", `<div>
      ${hours} : ${minutes} : ${seconds1}
  </div>`);
  },
 

}

time.getUserTime(time.hour, time.minutes, time.seconds)










 






