let submit = document.getElementById("submit-btn");
let rateButtons = document.querySelectorAll(".rating");
let showAnswer = document.getElementById("showAnswer");
let ratingCard = document.getElementById("rating-card");
let thankYouCard = document.getElementById("thank-you-card");
let response = "";

rateButtons.forEach((btn, i) =>  {
  console.log(i)
  btn.addEventListener('click', e => {
      rateButtons.forEach(btn => {
          btn.classList.remove('show');
      })
      btn.classList.add('show');
      submit.addEventListener('click', ev => {
          ev.preventDefault();
          showResponse(e);
      });
  });
})


function showResponse(e) {
  console.log(e.target.value)
  thankYouCard.classList.remove("hide");
  ratingCard.classList.add("hide");
  let showRating = `You selected ${e.target.textContent} out of 5`;
  return (showAnswer.innerText = showRating);
}
