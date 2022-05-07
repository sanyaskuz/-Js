//Задания 1)
// class Button{
//   constructor(width, height, text){
//     this._width = width;
//     this._height = height;
//     this._text = text;
//   }
//   set width(value){
//     this._width = value;
//   }
//   set height(value){
//     this._height = value;
//   }
//   set text(value){
//     this._text = value;
//   }
//   showBtn(){
//     document.write(
//       `<button style = 'width: ${this._width}px; height: ${this._height}px;'>${this._text}</button>`
//     );
//   }
// }
// class ChilldBtn extends Button{
//   constructor(width, height, text, color){
//     super(width, height, text);
//     this._color = color;
//   }
//   set color(value){
//     this._color = value;
//   }
//   showBtn(){
//     document.write(
//       `<button style = 'width: ${this._width}px; height: ${this._height}px; background-color: ${this._color}'>${this._text}</button>`
//     );
//   }
// }
// let btn = new Button(140, 50, 'Button2');
// btn.showBtn();
// let btn2 = new ChilldBtn(140, 35, 'Button2', 'red');
// btn2.showBtn();
// Задания 2)

class Figure{
  constructor(name, size1, size2 = 0, size3 = 0, height = 0){
    this.name = name; 
    this.size1 = size1;
    this.size2 = size2;
    this.size3 = size3;
    this.height = height;

  }
  set name(value){
   this._name = value;
  }
  set size1(value){
    this._size1 = value;
  }
  set size2(value){
    this._size2 = value;
  }
  set size3(value){
    this._size3 = value;
  }
  set height(value){
    this._height = value;
  }
  // getName(){
  //   document.write(`'Figure': ${this._name}`);
  // }
  showFigure(){
    let siz = this._name + ': size:1 -' + this._size1;
    if(this._size2 !== 0) siz +=` size:2 - ${this._size2}`;
    if(this._size3 !== 0) siz +=` size:3 - ${this._size3}`;
    if(this._height !== 0) siz +=` height : - ${this._height}`;
    return siz;

  }
  getArea(){
    document.write('Area :');
  }
  getPerimetr(){
    document.write('Perimetr :');
  }
}
class Square extends Figure{
  constructor(_name, _size1){
    super(_name, _size1);
  }
  getArea(){
    super.getArea();
    return this._size1 * this._size1;
  }
  getPerimetr(){
    super.getPerimetr();
    return this._size1 * 4;
  }
}
class Rectangle extends Figure{
  constructor(_name, _size1, _size2 ){
    super(_name, _size1, _size2);
  }
  getArea(){
    super.getArea();
    return this._size1 * this._size2;
  }
  getPerimetr(){
    super.getPerimetr;
    return (this._size1 + this._size2) * 2;
  }
}
class Triangel extends Figure{
  constructor(_name, _size1, _size2, _size3, _height){
    super(_name, _size1, _size2, _size3, _height);
  }
  getArea(){
    super.getArea();
    return (this._size1 * this._height) / 2;
  }
  getPerimetr(){
    super.getPerimetr();
    return this._size1 + this._size2 + this._size3;
  }
}
let Fig = [
  new Square('Sauare', 4),
  new Rectangle('Rectangle', 6, 4),
  new Triangel('Triangel', 5, 1, 8, 4)
];
for(let sowFig of Fig){
  document.write(sowFig.showFigure() + '<br>');
  document.write(sowFig.getArea() + '<br>');
  document.write(sowFig.getPerimetr() + '<br>');
}
