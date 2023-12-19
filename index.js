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
  img.src = "Screenshot 2023-12-13 232218.png";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

let image2 = document.getElementById("image1");

function toggle_bdg1() {
  let img = new Image();
  img.src = "chi3.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

let image3 = document.getElementById("image1");

function toggle_bdg2() {
  let img = new Image();
  img.src = "chi4.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

let image4 = document.getElementById("image1");

function toggle_bdg3() {
  let img = new Image();
  img.src = "chi5.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
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
});

anime({
  targets: ".img3",
  translateX: [
    { value: 120, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 },
  ],
  translateY: [
    { value: -40, duration: 500 },
    { value: 40, duration: 500, delay: 1000 },
    { value: 0, duration: 500, delay: 1000 },
  ],
  scaleX: [
    { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
    { value: 1, duration: 900 },
    { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
    { value: 1, duration: 900 },
  ],
  scaleY: [
    { value: [1.75, 1], duration: 500 },
    { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
    { value: 1, duration: 450 },
    { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
    { value: 1, duration: 450 },
  ],
  easing: "easeOutElastic(1, .8)",
  //   loop: true,
});
