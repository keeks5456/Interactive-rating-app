let submit = document.getElementById("submit-btn");
let rateButtons = document.getElementsByClassName("rating");
let showAnswer = document.getElementById("showAnswer");
let ratingCard = document.getElementById("rating-card");
let thankYouCard = document.getElementById("thank-you-card");
console.log(submit);
let response = "";
// submit.disabled = true;

//we need to add a click funtion to our buttons
function selectRateButton() {
  for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].addEventListener("click", activeRateClicked);
  }
}
selectRateButton();

//add an active funtion to button thats clicked

function activeRateClicked() {
  resetButton();
  response = this.id;
  this.classList.add("active");
  submit.disabled = false;
}

//reset the button so a different one looks activated
function resetButton() {
  for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].classList.remove("active");
  }
  response = "";
}

//submit button functionality
submit.addEventListener("click", () => {
  submit.classList.add("submit-active");
  submit.classList.add("submit-text-active")
  showResponse();
});
console.log(ratingCard)
function showResponse() {
  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
  let showRating = `You selected ${response} out of 5`;
  showAnswer.innerText = showRating;
}
