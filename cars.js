// constract function
class Cars {
  constructor(make, model, colour, image, registrationNumber, price) {
    (this.make = make),
      (this.model = model),
      (this.colour = colour),
      (this.image = image),
      (this.registrationNumber = registrationNumber),
      (this.price = price);
  }
  editPrice(newPrice) {
    return (this.price = newPrice * 5);
  }
  showAll() {
    return ` Make Date : ${this.make} ,Model : ${this.model}, Colour : ${this.colour}, Image : ${this.image}, Registration Number : ${this.registrationNumber} ,price :${this.price}`;
  }
}

const class1 = new Cars("2019", "BMW", "Red", "htpp://#", "3928203", "100000");
const class2 = new Cars("2019", "BMW", "Red", "htpp://#", "3928203", "100000");
const class3 = new Cars("2019", "BMW", "Red", "htpp://#", "3928203", "100000");
const class4 = new Cars("2019", "BMW", "Red", "htpp://#", "3928203", "100000");
const class5 = new Cars("2019", "BMW", "Red", "htpp://#", "3928203", "100000");

class1.editPrice("20");
class1.showAll();
//Each car object should also include a editPrice(newPrice) method.
// this method should change the price of the car
