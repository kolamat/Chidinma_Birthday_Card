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
    1,
    "My Love",
    2,
    "Happy_Birthday_To_You",
    "Long_Life_And_Prosperity",
    "More_Money_In_Your_Account",
    "More_Cake_To_Burst_And_Eat",
    "Lastly_Love_You",
  ],
  shuffle: false,
  cursorChar: " &#x2022;",
  startDelay: 2000,
  typeSpeed: 130,
  backSpeed: 130,
  backDelay: 2000,
  loop: true,
});
