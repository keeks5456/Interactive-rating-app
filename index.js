let submit = document.getElementById("submit-btn");
let rateButtons = document.getElementsByClassName("rating");
let showAnswer = document.getElementById("showAnswer");
let ratingCard = document.getElementById("rating-card");
let thankYouCard = document.getElementById("thank-you-card");
let response = "";

//we need to add a click funtion to our buttons
function selectRateButton() {
  for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].addEventListener("click", () => {
      activeRateClicked(rateButtons[i]);
    });
  }
}
selectRateButton();

//add an active funtion to button thats clicked
function activeRateClicked(element) {
  console.log(element);
  //toggle allows to auto show or remove show
  element.classList.toggle("show");
  response = element.innerText;

  console.log(response);
}

//submit button functionality

submit.addEventListener("click", () => {
  showResponse();
});

function showResponse() {
  thankYouCard.classList.remove("hide");
  ratingCard.classList.add("hide");
  let showRating = `You selected ${response} out of 5`;
  return (showAnswer.innerText = showRating);
}
