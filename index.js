const typed = new Typed("#multiple", {
  strings: [
    "Chidinma_Meebaby",
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
  img.src = "chi2.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

function toggle_bdg1() {
  let img = new Image();
  img.src = "chi1.png";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

function toggle_bdg2() {
  let img = new Image();
  img.src = "chi3.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

function toggle_bdg3() {
  let img = new Image();
  img.src = "chi4.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

function toggle_bdg4() {
  let img = new Image();
  img.src = "chi5.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

function toggle_bdg5() {
  let img = new Image();
  img.src = "chi6.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

let main = document.getElementById("body");
let display = 0;

function clear() {
  if (display == 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = 1;
  }
}

anime({
  targets: ".img1",
  translate: {
    value: 250,
    duration: 800,
  },
  rotate: {
    value: 720,
    duration: 1800,
    easing: "easeInOutSine",
  },
  scale: {
    value: 0.9,
    duration: 1600,
    delay: 800,
    easing: "easeInOutQuart",
  },
  delay: 250,
  loop: 2,
});

anime({
  targets: ".img2",
  translate: {
    value: 250,
    duration: 800,
  },
  rotate: {
    value: -720,
    duration: 1800,
    easing: "easeInOutSine",
  },
  scale: {
    value: 0.9,
    duration: 1600,
    delay: 800,
    easing: "easeInOutQuart",
  },
  delay: 250,
  loop: 2,
});

anime({
  targets: ".img3",
  keyframes: [
    { translateY: -40 },
    { translateX: 50 },
    { translateY: 40 },
    { translateX: 0 },
    { translateY: 0 },
  ],
  duration: 4000,
  easing: "easeOutElastic(1, .8)",
  loop: 1,
});
