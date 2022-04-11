
let submit = document.querySelector("button")
let radioInputs = document.querySelectorAll("input[name='rating']")
let output = document.getElementById("output")
let form = document.getElementById("rating-form")

//thank you page
function thankYouPage(){
  let p = document.createElement("p")
  const choosenRate = document.createTextNode(`You selected ${radioInputs.checked}`)
  p.appendChild(choosenRate)

if(radioInputs.checked === true){
  console.log(p)
  window.location.replace('./thankyou.html')
} else {
  console.log('nothing')
}
  
}
thankYouPage()


submit.addEventListener("click", (e) =>{
  e.preventDefault()
  let selectRating;
  for(const radioInput of radioInputs){
    if(radioInput.checked){
      // console.log(radioInput.checked === true ? console.log(radioInput.value) : "nothing")
      selectRating = radioInput.value
      break;
    }
  }
  if(selectRating){
    alert(selectRating)
    thankYouPage()

  } else {
    alert("select something")
  }
  // form.submit()
  // output.innerText = selectRating ? `you selected ${selectRating}` : `choose a rating`
})

