function handleClick(event) {
  console.log(event.target);
  alert('Thanks for clicking!');
}

function badClick(event) {
  const buttonElem = event.target;
  buttonElem.textContent = "But why????";
}

// find the element we want to pay attention to
const button = document.getElementById('btn');

// provide the type of event we want to "listen" to AND provide a function to be called
button.addEventListener('click', handleClick);

// same steps for button two
const buttonTwo = document.getElementById('btn-do-not-click');
buttonTwo.addEventListener('click', badClick);



// forms allow for more info to be gathered from user , and processed only when all info in
function handleForm(event) {
  event.preventDefault();
  const formElem = event.target;

  // text input -> value
  // check boxes -> checked
  // numeric values -> convert value to number

  const realAge = parseInt(formElem.age.value);

  alert(typeof (realAge));

}


const form = document.getElementById('kitten-form');
form.addEventListener('submit', handleForm);
