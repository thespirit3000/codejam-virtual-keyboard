// import MobileMenu from './modules/MobileMenu.js';
// import Modal from './modules/Modal.js';
import {
  keyCode
} from './modules/keys.js';
import {
  domArray,
  setUpperCaseClass,
  setLowerCaseClass,
  toggleKeyCase
} from './modules/helpers.js'



let state = {
  currentLanguage: 'en',
  changeLanguage() {
    if (this.currentLanguage == 'ru') {
      this.currentLanguage = 'en'
    } else {
      this.currentLanguage = 'ru'
    }
  },
  setLanguage(language) {
    this.currentLanguage = language;
  }
};

const keysNodeList = domArray('.button_overlay');
// -----------Event Handlers-----------------------

const handleClick = event => {
  if (event.target.classList.contains("button")) {}
};

const handleKeyDown = event => {
  event.preventDefault();
  if (event.key === 'Shift' && event.repeat === false) {
    toggleKeyCase(keysNodeList, 'text_uppercase')
  }
  if (event.ctrlKey && event.altKey) {
    keysNodeList.forEach(element => {
      element.classList.toggle('hide')
    })
    state.changeLanguage();
  }
}

const handleKeyUp = event => {
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
    toggleKeyCase(keysNodeList, 'text_uppercase')
  }

}
const initialize = () => {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en')
  };
  const storedLanguage = localStorage.getItem('lang');
  state.setLanguage(storedLanguage);
  const toShow = document.querySelectorAll(`.${state.currentLanguage}`);
  toShow.forEach(element => {
    element.classList.toggle('hide')
  })
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
  console.log(keyCode);
}

const unloadWindow = () => {
  localStorage.clear();
  localStorage.setItem('lang', state.currentLanguage);
}

window.onload = initialize;
window.onbeforeunload = unloadWindow;