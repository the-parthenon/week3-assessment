const song = document.getElementById('ritual-reveal');
let myFace = document.getElementById('my-face');
let myFavColor = document.getElementById('color');
let myFavPlace = document.getElementById('place');
let myFavRitual = document.getElementById('ritual');
let secretClick = document.getElementById('secret');

const myDumbFace = () => {
  alert(`This is exactly what I look like!`);
  myFace.removeEventListener('mouseover', myDumbFace);
};

const FavRitClick = () => {
  document.body.style.background = 'pink';
  alert(`I won't tell you, I'll show you!`);
  setTimeout(() => {
    document.body.style.background = '#ddd';
  }, 3000);
};

const FavPlace = () => {
  window.open('https://visittheoregoncoast.com/', '_blank');
};

const FavRitual = () => {
  song.classList.remove('hide');
};

const secretReveal = () => {
  console.log('I am fair to middling at hiding things.  Hello from the console!');
};

myFace.addEventListener('mouseover', myDumbFace);
myFavColor.addEventListener('click', FavRitClick);
myFavPlace.addEventListener('click', FavPlace);
myFavRitual.addEventListener('click', FavRitual);
secretClick.addEventListener('click', secretReveal);
