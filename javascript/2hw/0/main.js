let person = {
  nationality: 'black',
  age: 4,
  name: 'Bobik',
  height: 190

};
// Обращение через  точку
console.log(person.nationality);
person.nationality = 'white';

console.log(person);    
// Обращение через  скобки

var MainObject = new Object();
var SubObject = new Object();
obj="string";
MainObject["object"] = SubObject;
MainObject["string"] = "some_string";
MainObject["number"] = "6";
SubObject.item = "some_item";

console.log(MainObject);




