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

anime({
  targets: ".img1",
  translate: {
    value: 250,
    duration: 800,
  },
  rotate: {
    value: 360,
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
    value: -360,
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
