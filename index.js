const typed = new Typed("#multiple", {
  strings: [
    "Chidinma My Love",
    "Happy_Birthday",
    "Long_Life_And_Prosperity",
    "More_Money_In_Your_Account",
    "Lastly_More_Cake_To_Burst_And_Eat",
  ],
  shuffle: false,
  cursorChar: "&#x2022;",
  startDelay: 2000,
  typeSpeed: 50,
  backSpeed: 110,
  backDelay: 2000,
  loop: false,
});

let bdg = document.getElementById("image");

function toggle_bdg() {
  let img = document.createElement("img");
  img.src = "Screenshot 2023-12-13 232218.png";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

let image2 = document.getElementById("image1");

function toggle_bdg1() {
  let img = new Image();
  img.src = "chi3.jpg";
  document.getElementById("body").appendChild(img);
}

let image3 = document.getElementById("image1");

function toggle_bdg2() {
  let img = new Image();
  img.src = "chi4.jpg";
  document.getElementById("body").appendChild(img);
}

let image4 = document.getElementById("image1");

function toggle_bdg3() {
  let img = new Image();
  img.src = "chi5.jpg";
  document.getElementById("body").appendChild(img);
}

var demoContentEl = document.querySelector(".demo");
var fragment = document.createDocumentFragment();
var easingNames = [
  "easeInQuad",
  "easeInCubic",
  "easeInQuart",
  "easeInQuint",
  "easeInSine",
  "easeInExpo",
  "easeInCirc",
  "easeInBack",
  "easeOutQuad",
  "easeOutCubic",
  "easeOutQuart",
  "easeOutQuint",
  "easeOutSine",
  "easeOutExpo",
  "easeOutCirc",
  "easeOutBack",
  "easeInBounce",
  "easeInOutQuad",
  "easeInOutCubic",
  "easeInOutQuart",
  "easeInOutQuint",
  "easeInOutSine",
  "easeInOutExpo",
  "easeInOutCirc",
  "easeInOutBack",
  "easeInOutBounce",
  "easeOutBounce",
  "easeOutInQuad",
  "easeOutInCubic",
  "easeOutInQuart",
  "easeOutInQuint",
  "easeOutInSine",
  "easeOutInExpo",
  "easeOutInCirc",
  "easeOutInBack",
  "easeOutInBounce",
];

function createEasingDemo(easing) {
  var demoEl = document.createElement("div");
  demoEl.classList.add("el", "square", "stretched", "easing-" + easing);
  demo({
    targets: demoEl,
    translateY: [50, -50],
    direction: "alternate",
    loop: true,
    delay: 100,
    endDelay: 100,
    duration: 1000,
    easing: easing,
  });
  fragment.appendChild(demoEl);
}

easingNames.forEach(function (easeName) {
  createEasingDemo(easeName);
});

demoContentEl.innerHTML = "";
demoContentEl.appendChild(fragment);
