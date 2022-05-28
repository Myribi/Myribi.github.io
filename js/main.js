//replace with your user:
const GITHUB_URL = "https://api.github.com/users/Myribi";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
  
    profileName.innerText=data.name;
    profileImage.src=data.avatar_url;
  });


  const firework = document.getElementById('firework');

  firework.addEventListener('click', () => {
    const particles = [];
    const color = randomColor();
    
    const particle = document.createElement('span');
    particle.classList.add('particle', 'move');
    
    var { x, y } = randomLocation();
    if (x > 0) {
      x = Math.max(200, x);
    } else {
      x = Math.min(-200, x);
    }
    y = Math.max(200, Math.abs(y));
    x = x + 'px'
    y = y + 'px'
    particle.style.setProperty('--x', x);
    particle.style.setProperty('--y', y);
    particle.style.background = color;
    
    firework.appendChild(particle);
    
    particles.push(particle);
    
    setTimeout(() => {
    
      for(let i=0; i<100; i++) {
        const innerP = document.createElement('span');
        innerP.classList.add('particle', 'move');
        innerP.style.transform = `translate(${x}, ${y})`;
  
        const xs = Math.random() * 200 - 100 + 'px';
        const ys = Math.random() * 200 - 100 + 'px';
        innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
        innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
        innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
        innerP.style.background = color;
        
        firework.appendChild(innerP);
        particles.push(innerP)
      }
      
      setTimeout(() => {
        particles.forEach(particle => {
          particle.remove();
        })
      }, 500)
    }, 500);
  });
  
  function randomLocation() {
    return {
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2,
    }
  }
  
  function randomColor() {
    return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
  }

//maps
const dubai = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011947323!2d54.94729583309777!3d25.07638146897086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDuba%C3%AF%20-%20%C3%89mirats%20arabes%20unis!5e0!3m2!1sfr!2sil!4v1653408181838!5m2!1sfr!2sil"
const sf = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555120401!2d-122.50764008500157!3d37.75781499644896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20Californie%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sil!4v1653409443930!5m2!1sfr!2sil"
const london = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197392.80451839193!2d-0.21551228455767188!3d51.54948267102395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Royaume-Uni!5e0!3m2!1sfr!2sil!4v1653409713303!5m2!1sfr!2sil"
const cities = [dubai, sf, london];

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const map = document.getElementById('map');
let currentlySelected = 0;

prevButton.addEventListener('click', function(){
    currentlySelected--;
    map.src = cities[currentlySelected]
    nextButton.disabled = false;
    if (currentlySelected === 0) {
        prevButton.disabled = true;
    }
});

nextButton.addEventListener('click', function(){
    currentlySelected++;
    map.src = cities[currentlySelected]
    prevButton.disabled = false;
    if (currentlySelected === cities.length - 1) {
        nextButton.disabled = true;
    }
});
 
//contact

function fieldValidation() {

  const firstName = document.getElementById("first-name").value;
  const email = document.getElementById("email-adress").value;
  const comment = document.getElementById("comment").value;
  const time = document.getElementById("slot").value;


  if (firstName === '') {
      return false;
  }

  if (email === '') {
      return false;
  }

  if (comment === '') {
      return false;
  }

  if (time === '') {
      return false;
  }

  return true;

}


function changeSubmitButtonStatus(validation) {
  const button = document.getElementById('formbutton') 
  if (validation){
      button.disabled = false;
  } else {
      button.disabled = true;
  }
}


var form = document.querySelector('form');
form.addEventListener('change', function() {
  let valid = fieldValidation()
  console.log(valid)
  changeSubmitButtonStatus(valid);
});

//footer



function languages(table) {
  let sentence = "This page was built using: ";

  if (table.length === 1) {
      sentence = sentence.concat(table[0]);
      sentence = sentence.concat(".");
  } else {

  for (i=0; i<table.length - 2; i++) {
      sentence = sentence.concat(table[i]);
      sentence = sentence.concat(', ')
  }
  sentence = sentence.concat(table[table.length - 2]);
  sentence = sentence.concat(" and ");
  sentence = sentence.concat(table[table.length - 1]);
  sentence = sentence.concat(".");
  
  }
  return sentence;   
}



const codingLanguageList = ['HTML', "CSS", "JavaScript"];
const footerPhrase = document.getElementById('languages');
footerPhrase.innerHTML = languages(codingLanguageList);