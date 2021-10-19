 // constract function
// class Cars {
//   constructor(make, model, colour, image, registrationNumber, price) {
//     (this.make = make),
//       (this.model = model),
//       (this.colour = colour),
//       (this.image = image),
//       (this.registrationNumber = registrationNumber),
//       (this.price = price);
//   }
//   editPrice(newPrice) {
//     return (this.price = newPrice * 15);
//   }
//   showAll() {
//     return ` Make Date : ${this.make} ,Model : ${this.model}, Colour : ${this.colour}, Image : ${this.image}, Registration Number : ${this.registrationNumber} ,price :${this.price}`;
//   }
// }

// const class1 = new Cars("2019", "BMW", "Red", "htpp://#", "3928203", "100000");
// const class2 = new Cars(
//   "2020",
//   "Toyota",
//   "Red",
//   "htpp://#",
//   "3928203",
//   "100000"
// );
// const class3 = new Cars("2021", "GMC", "Red", "htpp://#", "3928203", "100000");
// const class4 = new Cars(
//   "2017",
//   "Nissan",
//   "Red",
//   "htpp://#",
//   "3928203",
//   "100000"
// );
// const class5 = new Cars("2010", "MG", "Red", "htpp://#", "3928203", "100000");

// class1.editPrice("20");
// class1.showAll();



//Task2
//clicked to chang siz of heading

const hSelector = document.querySelectorAll("h3");
const h3SizeClick = (elem) => 
hSelector.forEach(element => { 
    element.style.fontSize ="50px";
});
const changeSize = document.querySelector("#btnSize");
changeSize.addEventListener("click",h3SizeClick);

// Change the font style of a paragraph

const pSelector = document.querySelector("#text");
const pFontClick = (elem) => pSelector.style.fontFamily= "Arial,Verdana,Tahoma";
const changeFont = document.querySelector("#btnFont");
changeFont.addEventListener("click",pFontClick);

//Highlight a paragraph with back-ground #btnHighlight #p1
const p2Selector = document.querySelector("#p2");
const p2highlight = (elem) => p2Selector.style.backgroundColor= "#ec95ec";
const highlight = document.querySelector("#btnHighlight");
highlight.addEventListener("click",p2highlight);

//Hide an Image
const imgSelector = document.querySelector("#img");
const hideImg = (elem) => imgSelector.style.visibility= "hidden";
const imgBtn = document.querySelector("#btnHideImg");
imgBtn.addEventListener("click",hideImg);

//#btnAlternate .img1 .img2
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img1Src=img1.src;
const img2Src=img2.src;
const alternateImgs = (elem) => {
 img1.src=img2Src;
 img2.src = img1Src;
}
const alternatsBtn = document.querySelector("#btnAlternate");
alternatsBtn.addEventListener("click",alternateImgs);


//Task2 par2

