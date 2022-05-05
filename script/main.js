// задания 1)
class PrintMaсhine {
  constructor (size, color, fontFamily){
    this._color = color;
    this._size = size;
    this._fontFamily = fontFamily;
  }
  set size(value){
    this._size = value;
  }
  set color(value){
    this._color = value;
  }
 
  set fontFamily(value){
    this._fontFamily = value;
  }
  print(text){
    document.write(`<p style="font-size: ${this._size}px; color: ${this._color}; font-family: ${this._fontFamily}">${text}</p>`);
  }
 
}
let printM = new PrintMaсhine(45, 'blue', 'sans-serif');
printM.print('Hello World');
//задания 2)
// class News{
//   constructor(header, text, teg, dateP){
//     this._text = text;
//     this._header = header;
//     this._teg = teg;
//     this._dateP = dateP;

//   }
//   set header(value){
//     this._header = value;
//   }
//   set text(value){
//     this._text = value;
//   }
//   set teg(value){
//     this._teg = value;
//   }
//   set dateP(value){
//     this._dateP = value;
//   }
//   getTeg(){
//     let str = '#';
//     for (const n of this._teg) {
//       str += n + '#';
//     }
//     return str;
//   }
//   getData(){
//     let myDate = new Date();
//     let dateP1 = new Date(this._dateP);
//     if(myDate.toDateString() == dateP1.toDateString()){
//       return "Today!";
//     }else{
//       let res = Math.floor((curDate.getTime() - data_pub1.getTime()) / 86400000);
//       return `Прошло : ${res} дня`;
//     }
//   }
//   showText(){
//     document.write(
//       `<h1>${this._header}</h1>
//       <p>${this.getData()}</p>
//       <p>${this._text}</p>
//       <p>${this.getTeg()}</p>`
//     );
//   }
// }
// let getNaws = new News('Lorem, ipsum dolor sit', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br> Quibusdam officia reprehenderit qui impedit?<br> Error odio autem laboriosam architecto reiciendis repudiandae ipsum<br> sint impedit consectetur quasi?', ['Lorem', 'ipsum', 'text'], '2022.05.5' );
// getNaws.showText();