class Product{
    constructor(name,price,sale=0){
        this.price = price;
        this.sale=sale;
        this.name=name;
    }
    countTotalPrice(){
        let totalPrice=0;
        totalPrice=this.price-this.price*this.sale/100;
        return totalPrice;

    }
};
const memories = [32, 64, 128, 256];
class Phone extends Product{
    constructor(name,price,sale=0,memory, version){
        super(name,price,sale);
        this.memory=memory;
        this.version=version;

    }

    showAllInformation(){
        console.log(`Its Phone, name = ${this.name}  sale= ${this.sale} price= ${this.price} memory= ${this.memory} version=${ this.version}`);
    }
    set memory(memory) {
            if (memories.find(m => memory === m)) {
              this._memory = memory;
            } else {
              console.error('Такой памяти не существует');
            }
          }
    get memory() {
            return this._memory;
           }
   
};
const materials = ['wood', 'glass', 'metal', 'plastic'];
class Table extends Product{
    constructor(name,price,sale=0,material, color){
        super(name,price,sale)
        this.material=material;
        this.color=color;
    }
    set material(material) {
            if (materials.find(m => material === m)) {
              this._material = material;
            } else {
              console.error('Ты пытаешься изменить материал на какую-то чепуху')
            }
          }
        
          get material() {
            return this._material;
          }
          showAllInformation(count){
              if(count){
                console.log(` name = ${this.name}  total price = ${this.countTotalPrice()} material= ${this.material} color=${this.color}`);
              }else{

              
            console.log(` name = ${this.name}  sale= ${this.sale} price= ${this.price} material= ${this.material} color=${this.color}`);
              }
        }    
    
}; 
let Iphone = new Phone("айфон",20000,5,64,"11 PRO");
Iphone.showAllInformation();
console.log(Iphone.countTotalPrice());
let Iphone2 = new Phone("айфон",25000,0,644,"11 PRO MAX");
Iphone2.showAllInformation();
console.log(Iphone2.countTotalPrice());
Iphone2.memory=128;
Iphone2.showAllInformation();
let STYL = new Table("ERNA",250,3,"wood","white");
console.log(STYL.countTotalPrice());
STYL.showAllInformation("count");
STYL.showAllInformation();