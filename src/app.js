window.addEventListener("load", function () {


// random fade in effects on individual letters
let stringName = document.getElementById("name").innerHTML;
let elementName = this.document.getElementById("name");
randomLetterFadeIn(stringName, elementName);

let stringDescipt = this.document.getElementById("descript").innerHTML;
let elementDescript = this.document.getElementById("descript");
randomLetterFadeIn(stringDescipt,elementDescript);

function randomLetterFadeIn(string, element){

let  letters = string.split('');
while(element.hasChildNodes()) element.removeChild(element.firstChild);

for(let i = 0; i < letters.length; i++) {
  let letter = document.createElement('span'),
  style = 'opacity ' + (Math.random() *5 +1 ) + 's ease-in-out';
  letter.appendChild(document.createTextNode(letters[i]));
  letter.style.WebKitTransition = letter.style.MozTransition = 
  letter.style.MSTransition = letter.style.OTransition = letter.style.transition = style;
  letter.style.opacity = 0;
  element.appendChild(letter);
}

setTimeout(function() {
  for(let i = 0; i < element.childNodes.length; i++) {
    element.childNodes[i].style.opacity = 1;
  }
}, 0);
}

//hamburger to cross animation navigation
const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const firstBar = document.getElementById('bar-first');
const secondBar = document.getElementById('bar-second');
const thirdBar = document.getElementById('bar-third');
let menuOn=false;

function toggleButton(){
  navList.classList.toggle('show');
    if(menuOn){
    firstBar.style.transform = 'rotate(0deg)';
    firstBar.style.top = '0px';
    secondBar.style.opacity =1;
    thirdBar.style.transform = 'rotate(0deg)';
    thirdBar.style.bottom = '0px';
    menuOn=false;
    
  }else{
    firstBar.style.transform = 'rotate(45deg)';
    firstBar.style.top = '8px';
    secondBar.style.opacity =0;
    thirdBar.style.transform = 'rotate(-45deg)';
    thirdBar.style.bottom = '8px';
    menuOn=true;
  }
 }

hamburgerBtn.addEventListener('click', toggleButton);

// <div class="card">
//             <img class="card-image" id="projectImage" src="src\images\color-morph.svg" alt="">
//             <h3 id="projectTitle">Project One</h3>
//             <p class="card-text" id="descriptionText">This is some text about the project</p>
//             <hr/>
//             <p class = "card-text" ><a id="gitHubLink" href="https://github.com/LA1975">
//                 <i class="lab la-github"></i>
//             </a>View here</p>
//         </div>
function addCard(project) {
  //reference #container
  const container = document.querySelector("#container");
  //create div, assign class "card", append to #container
  const card = document.createElement("div");
  card.classList.add("card");
  container.appendChild(card);

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-image");
  cardImage.src = `src/images/${project.fileName}`;
  cardImage.alt = `${project.title}`
  card.appendChild(cardImage);

  
  //create h3, assign class "card-title",append to cardBody, 
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  card.appendChild(cardTitle);
  cardTitle.innerHTML = `${project.title}`;

  //create p, assign class "card-text", append to cardBody, write description
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  card.appendChild(cardText);
  cardText.innerHTML = `${project.description}`;

  //create line in card
  const line = document.createElement("hr");
  card.appendChild(line);

//create gitHubicon and link
const link = document.createElement("p");
link.classList.add("card-text");
card.appendChild(link);

const gitHubLink = document.createElement("a");
        gitHubLink.href = `${project.gitHubLink}`;
        link.appendChild(gitHubLink);
        gitHubLink.innerHTML = `<i class="lab la-github"></i>`

}

for (let i = 0; i < project.length; i++) {
      addCard(project[i]);
}


//light and darkmode
const modeBtnIcon = document.getElementById('modeBtnIcon');

const nodeBtn = document.getElementById('modeBtn')
let body =document.querySelector('body');
let isDark = body.classList.contains('dark');
 

modeBtn.addEventListener('click', e => {
    if (isDark) {
        body.classList.replace('dark','light');
        modeBtnIcon.classList.replace('la-cloud-moon','la-sun');
        isDark = false;
    } else {
        body.classList.replace('light','dark');
        modeBtnIcon.classList.replace('la-sun','la-cloud-moon');
        isDark =true;
    }
});

});
