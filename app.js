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

const sectionButton = document.querySelectorAll('.control');
/*
tried to apply function to navLinks as well seems to creact a conflict with the buttons for some reason.  Also tried to apply active links in its own function but CSS was overriding the active appearance of the link even with higher priority - leave for now investigate later.*/
//const navLink= this.document.querySelectorAll('.navLink');

function activeLink(link){
  //set active class on button click
  for(let i=0;i<link.length;i++){
    link[i].addEventListener('click', function() {
      let currentLink = document.querySelectorAll('.activeBtn');
      currentLink[0].className = currentLink[0].className.replace ('activeBtn','');
      this.className += ' activeBtn';
  })
  }
}

  activeLink(sectionButton);
  //activeLink(navLink);

});
