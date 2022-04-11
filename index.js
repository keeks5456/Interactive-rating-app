let submit = document.querySelector("button");
let rateButtons = document.getElementsByClassName("rating");
console.log(rateButtons);

//we need to add a click funtion to our buttons
function selectRateButton() {
  for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].addEventListener("click", () => {
      console.log("click");
    });
  }
}
selectRateButton();

//add an active funtion to button thats clicked