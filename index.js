let submit = document.getElementById("submit");
let rateButtons = document.getElementsByClassName("rating");
let showAnswer = document.getElementById("showAnswer")
let ratingCard = document.getElementById("rating-card");
let thankYouCard = document.getElementById("thank-you-card");
console.log(thankYouCard)
let response = "";
// submit.disabled = true;
console.log(rateButtons);

//we need to add a click funtion to our buttons
function selectRateButton() {
  for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].addEventListener("click", activeRateClicked);
  }
}
selectRateButton();

//add an active funtion to button thats clicked

function activeRateClicked() {
  // resetButton();
  response = this.id;
  this.classList.add("active");
  console.log(this);
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
  let textSubmit = submit.firstElementChild
  console.log("clicks")
  showResponse()
});

function showResponse(){
ratingCard.classList("hidden")
  let showRating = `You selected ${response} out of 5`
  showAnswer.innerText = showRating
}