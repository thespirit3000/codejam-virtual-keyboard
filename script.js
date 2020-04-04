// import MobileMenu from './modules/MobileMenu.js';
// import Modal from './modules/Modal.js';




const domArray = (selector) => {
  return document.querySelectorAll(selector);
}

const keysNodeList = domArray('.button_overlay');

const setUpperCaseClass = (element) => {
  element.classList.add("text_uppercase");
}

const setLowerCaseClass = (element) => {
  element.classList.remove("text_uppercase");
}

// -----------Event Handlers-----------------------

const handleClick = event => {
  if (event.target.classList.contains("button")) {}
};

const handleKeyDown = event => {
  if (event.key === 'Shift' && event.repeat === false) {
    event.preventDefault();
    keysNodeList.forEach(element => {
      if (element.classList.contains('text_uppercase')) {
        element.classList.remove('text_uppercase');
      } else {
        element.classList.add('text_uppercase');
      }
    })
  }
}

const handleKeyUp = event => {
  // If "caps lock" is pressed, display the warning text
  event.preventDefault();
  if (event.key === 'CapsLock' && event.getModifierState("CapsLock")) {
    keysNodeList.forEach(element => {
      setUpperCaseClass(element);
    })
  };

  if (event.key === 'CapsLock' && event.getModifierState("CapsLock") === false) {
    keysNodeList.forEach(element => {
      setLowerCaseClass(element);
    })
  };

  if (event.key === 'Shift') {
    event.preventDefault();
    keysNodeList.forEach(element => {
      if (element.classList.contains('text_uppercase')) {
        element.classList.remove('text_uppercase');
      } else {
        element.classList.add('text_uppercase');
      }
    })
  }
}

const initialize = () => {
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
}

window.onload = initialize;