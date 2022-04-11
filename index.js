console.log("hi")

let submit = document.querySelector("button")
let radioInputs = document.querySelectorAll("input[name='rating']")
let output = document.getElementById("output")
let form = document.getElementById("rating-form")

console.log(form)

submit.addEventListener("click", (e) =>{
  e.preventDefault()
  let selectRating;


  for(const radioInput of radioInputs){
    if(radioInput.checked){
      selectRating = radioInput.value
      break;
    }
  }
  if(selectRating){
    // alert(selectRating)
    window.location.replace("./thankyou.html")

  } else {
    alert("select something")
  }
  // form.submit()
  // output.innerText = selectRating ? `you selected ${selectRating}` : `choose a rating`
})