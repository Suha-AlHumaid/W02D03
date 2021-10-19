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
    return (this.price = newPrice * 15);
  }
  showAll() {
    return ` Make Date : ${this.make} ,Model : ${this.model}, Colour : ${this.colour}, Image : ${this.image}, Registration Number : ${this.registrationNumber} ,price :${this.price}`;
  }
}

const class1 = new Cars("2019", "BMW", "Red", "htpp://#", "3928203", "100000");
const class2 = new Cars(
  "2020",
  "Toyota",
  "Red",
  "htpp://#",
  "3928203",
  "100000"
);
const class3 = new Cars("2021", "GMC", "Red", "htpp://#", "3928203", "100000");
const class4 = new Cars(
  "2017",
  "Nissan",
  "Red",
  "htpp://#",
  "3928203",
  "100000"
);
const class5 = new Cars("2010", "MG", "Red", "htpp://#", "3928203", "100000");

class1.editPrice("20");
class1.showAll();

//Task2
//clicked to chang siz of heading

const hSelector = document.querySelectorAll("h3");
const h3SizeClick = (elem) =>
  hSelector.forEach((element) => {
    element.style.fontSize = "50px";
  });
const changeSize = document.querySelector("#btnSize");
changeSize.addEventListener("click", h3SizeClick);

// Change the font style of a paragraph

const pSelector = document.querySelector("#text");
const pFontClick = (elem) =>
  (pSelector.style.fontFamily = "Arial,Verdana,Tahoma");
const changeFont = document.querySelector("#btnFont");
changeFont.addEventListener("click", pFontClick);

//Highlight a paragraph with back-ground #btnHighlight #p1
const p2Selector = document.querySelector("#p2");
const p2highlight = (elem) => (p2Selector.style.backgroundColor = "#ec95ec");
const highlight = document.querySelector("#btnHighlight");
highlight.addEventListener("click", p2highlight);

//Hide an Image
const imgSelector = document.querySelector("#img");
const hideImg = (elem) => (imgSelector.style.visibility = "hidden");
const imgBtn = document.querySelector("#btnHideImg");
imgBtn.addEventListener("click", hideImg);

//#btnAlternate .img1 .img2
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img1Src = img1.src;
const img2Src = img2.src;
const alternateImgs = (elem) => {
  img1.src = img2Src;
  img2.src = img1Src;
};
const alternatsBtn = document.querySelector("#btnAlternate");
alternatsBtn.addEventListener("click", alternateImgs);

//Task2 part 2

document.getElementById("beforeImg").addEventListener("mouseover", mouseOver);
document.getElementById("beforeImg").addEventListener("mouseout", mouseOut);

function mouseOut() {
  document.getElementById("beforeImg").src =
    "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg";
}

function mouseOver() {
  document.getElementById("beforeImg").src =
    "https://arga-mag.com/file/img/2020/12/Beautiful-text-about-flowers.jpg";
}

//3
// function showAlert() {
//     alert("This is the alert!")
//   }
const imgAlert = document.querySelector("#imgAlert");

if (imgAlert.addEventListener) {
  imgAlert.addEventListener(
    "contextmenu",
    function (e) {
      alert("You've tried to open context menu"); //here you draw your own menu
      e.preventDefault();
    },
    false
  );
} else {
  imgAlert.addEventListener("oncontextmenu", function () {
    alert("You pressed the right click");
    window.event.returnValue = false;
  });
}

//4
//Create an alert on the page when a user enters data into a input

const inputText = document.getElementById("input1");
inputText.addEventListener("change", myFunction);
function myFunction() {
  if (inputText.value) {
    alert("Thank you!");
  }
}

//5
//Create an alert to let the user know when the page has loaded

window = function () {
  alert(`Page loaded!`);
};

//6
//Highlight all paragraphs when the mouse moves over them (then revert back once it has moved past them).

const z = document.querySelectorAll(".text");

const highlighterYellow = (elem) =>
  z.forEach((element) => {
    element.style.backgroundColor = "yellow";
    console.log(element);
  });

const pOriginal = (elem) =>
  z.forEach((element) => {
    element.style.backgroundColor = "white";
    console.log(element);
  });

const chan = document.querySelector(".text");
chan.addEventListener("mouseover", highlighterYellow);
chan.addEventListener("mouseout", pOriginal);
