const phrases = ["xabliv", "HTML, CSS, SCSS, JS, react.js"];
const textElement = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
let phraseIndex = 0;
let letterIndex = 0;
let typingInterval;


function typeText() {
  const currentPhrase = phrases[phraseIndex];
  textElement.textContent += currentPhrase[letterIndex];
  letterIndex++;
  if (letterIndex >= currentPhrase.length) {
    clearInterval(typingInterval);
    if (phraseIndex === 0) {
      setTimeout(() => {
        textElement.textContent = "";
        phraseIndex++;
        letterIndex = 0;
        typingInterval = setInterval(typeText, 100);
      }, 1000);
    } else {
      phraseIndex++;
      letterIndex = 0;
      if (phraseIndex < phrases.length) {
        setTimeout(() => {
          typingInterval = setInterval(typeText, 100);
        }, 1000);
      }
    }
  }
}


typingInterval = setInterval(typeText, 100);


setInterval(() => {
  cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);
