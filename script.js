// import MobileMenu from './modules/MobileMenu.js';
// import Modal from './modules/Modal.js';

let state = {
  currentLanguage: 'en',
  changeLanguage() {
    if (this.currentLanguage == 'ru') {
      this.currentLanguage = 'en'
    }else{
      this.currentLanguage = 'ru'
    }
  },
  setLanguage(language) {
    this.currentLanguage = language;
  }
};

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

const toggleKeyCase = (keyNodeArray, upperSelector) => {
  keyNodeArray.forEach(element => {
    if (element.classList.contains(upperSelector)) {
      element.classList.remove(upperSelector);
    } else {
      element.classList.add(upperSelector);
    }
  })
}

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
  toShow.forEach(element=> {
    element.classList.toggle('hide')
  })
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
}

const closeWindow = () => {
  localStorage.clear();
  localStorage.setItem('lang', state.currentLanguage);
}

window.onload = initialize;
window.onbeforeunload = closeWindow;