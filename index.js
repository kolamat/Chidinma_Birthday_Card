// var greetingElement = document.getElementById("greeting");

// greetingElement.textContent = "Happy__Birthday_Chidinma_Love";
// "Happy_Birthday_To_You",
// // "Long_Life_And_Prosperity",
// // "More_Money_In_Your_Account",
// // "More_Cake_To_Burst_And_Eat",
// // "Lastly_Love_You",
// const typed = new Typed(".multiple-text", {
//   strings: [],
//   shuffle: true,
//   cursorChar: ".",
//   startDelay: 2000,
//   typeSpeed: 130,
//   backSpeed: 130,
//   backDelay: 2000,
//   loop: true,
// });
// const typed = Typed("#pray", {
//   String: ["developer"],
// });

const typed = new Typed("#pray", {
  strings: [
    "My Love",
    "Happy_Birthday",
    "Long_Life_And_Prosperity",
    "More_Money_In_Your_Account",
    "More_Cake_To_Burst_And_Eat",
    "Lastly_Love_You",
  ],
  shuffle: false,
  fadeOut: true,
  cursorChar: "&#x2022;",
  startDelay: 2000,
  typeSpeed: 50,
  //   backSpeed: 130,
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

function toggle_bdg2() {
  let kola = document.createElement("img");
  kola.src = "kolade_head.jpg";
  document.getElementById("body1").appendChild(h1);
  bdg.innerHTML = "Look At yourseif Pretty Soul.";
}
