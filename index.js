const typed = new Typed("#multiple", {
  strings: [
    "Chidinma My Love",
    "Happy_Birthday",
    "Long_Life_And_Prosperity",
    "More_Money_In_Your_Account",
    "More_Cake_To_Burst_And_Eat",
    "Lastly_Love_You",
  ],
  shuffle: false,
  //   fadeOut: true,
  cursorChar: "&#x2022;",
  startDelay: 2000,
  typeSpeed: 50,
  backSpeed: 130,
  backDelay: 2000,
  loop: true,
});

let bdg = document.getElementById("image");

function toggle_bdg() {
  let img = document.createElement("img");
  img.src = "Screenshot 2023-12-13 232218.png";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

let image2 = document.getElementById("image1");

function toggle_bdg3() {
  let img = new Image();
  img.src = "chi3.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

let image3 = document.getElementById("image1");

function toggle_bdg4() {
  let img = new Image();
  img.src = "chi4.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}

let image4 = document.getElementById("image1");

function toggle_bdg5() {
  let img = new Image();
  img.src = "chi5.jpg";
  document.getElementById("body").appendChild(img);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}
