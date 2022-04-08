// console.log('hello world');

let form = document.querySelector('form#contact');
let kittyPic = document.querySelector('iframe');
let inputName = document.getElementById('name');
let inputMessage = document.getElementById('message');

function handleSubmit(evt) {
  evt.preventDefault();
  alert(`We've received your form submission!  Thank you!`);
  inputName.value = '';
  inputMessage.value = '';
}

const kittyMouseOver = (event) => {
  alert(
    `The kitties hold each other's hands to prevent each other from doing hits.  You seem like a nicer person, I bet nobody needs to hold your hand to keep you from doing unwanted hits!`
  );
  kittyPic.removeEventListener('mouseover', kittyMouseOver);
};

form.addEventListener('submit', handleSubmit);
kittyPic.addEventListener('mouseover', kittyMouseOver);
