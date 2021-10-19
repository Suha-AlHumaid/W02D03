// constract function
class cars {


constructor() {
    this.make= make, 
    this.model= model, 
    this.colour=colour, 
    this.image=image, 
    this.registrationNumber=registrationNumber,
    this.price=price;}
    editPrice(newPrice) {
this.price = newPrice*5;
     }
     showAll() {
return ` Make Date ${this.make} ,Model ${this.model}, Colour ${this.colour}, Image ${this.image}, Registration Number${this.registrationNumber} ,price of 2021 ${this.newPrice(this.price)}`;
     }

};

let bmw = class cars("2019","BMW","Red", "url", "3928203" ,"30000");
cars.showAll();
//Each car object should also include a editPrice(newPrice) method.
// this method should change the price of the car


