window.addEventListener("load", function () {

    let bioString = "I am a Junior Full-Stack Software Developer, freshly completed the University of Auckland PostGraduate Certificate in Information Technology. I recently discovered coding again out of a desire for a new challenge and to learn new skills...and fell in love with it. I find it very intellectually stimulating, challenging and enjoyed working constructively with others to problem solve. I\'d describe myself as organised, motivated and flexible, with a wide ranging skillset. My experience as a chemistry teacher gives me the ability to distill difficult concepts clearly and simply. I\'m open to new opportunities and looking to utilise my previous experiences going forward in a new role as a developer"
    let bio = document.getElementById('bio');

randomLetterFadeIn(bioString, bio);


function randomLetterFadeIn(string, element){

let  letters = string.split('');
while(element.hasChildNodes()) element.removeChild(element.firstChild);

for(let i = 0; i < letters.length; i++) {
  let letter = document.createElement('span'),
  style = 'opacity ' + (Math.random() *5 +1 ) + 's linear';
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
});
