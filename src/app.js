window.addEventListener("load", function () {

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
});
