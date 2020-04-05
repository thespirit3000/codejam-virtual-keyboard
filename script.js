import keyCode from './modules/keys.js';

import {
  domArray,
  setUpperCaseClass,
  setLowerCaseClass,
  toggleKeyCase,
} from './modules/helpers.js';

import {
  renderHTML,
  renderFooter,
} from './modules/render.js';

const state = {
  currentLanguage: 'en',
  changeLanguage() {
    if (this.currentLanguage === 'ru') {
      this.currentLanguage = 'en';
    } else {
      this.currentLanguage = 'ru';
    }
  },
  setLanguage(language) {
    this.currentLanguage = language;
  },
};
const keysNodeList = domArray('.button_overlay');


// -----------Event Handlers-----------------------
const handleClick = (event) => {
  if (event.target.classList.contains('button')) {
    const { id } = event.target;
    const active = event.target.querySelector(`.${state.currentLanguage}`);
    const clickEvent = new KeyboardEvent('keydown', { code: `${id}`, key: `${active.innerText}` });
    document.dispatchEvent(clickEvent);
  }
};

const handleKeyDown = (event) => {
  event.preventDefault();
  if (event.key === 'Shift' && event.repeat === false) {
    toggleKeyCase(keysNodeList, 'text_uppercase');
  }
  if (event.ctrlKey && event.altKey) {
    keysNodeList.forEach((element) => {
      element.classList.toggle('hide');
    });
    state.changeLanguage();
  }
  const textArea = document.querySelector('.text-area');
  textArea.value += event.key;
};

const handleKeyUp = (event) => {
  event.preventDefault();
  if (event.key === 'CapsLock' && event.getModifierState('CapsLock')) {
    keysNodeList.forEach((element) => {
      setUpperCaseClass(element);
    });
  }

  if (
    event.key === 'CapsLock'
    && event.getModifierState('CapsLock') === false
  ) {
    keysNodeList.forEach((element) => {
      setLowerCaseClass(element);
    });
  }
  if (event.key === 'Shift') {
    toggleKeyCase(keysNodeList, 'text_uppercase');
  }
};

const initialize = () => {
  renderHTML();
  renderFooter();
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en');
  }
  const storedLanguage = localStorage.getItem('lang');
  state.setLanguage(storedLanguage);
  const toShow = document.querySelectorAll(`.${state.currentLanguage}`);
  toShow.forEach((element) => {
    element.classList.toggle('hide');
  });
  document.addEventListener('mousedown', handleClick);
  //document.addEventListener('mouseup', handleClick);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
};

const unloadWindow = () => {
  localStorage.clear();
  localStorage.setItem('lang', state.currentLanguage);
};

window.onload = initialize;
window.onbeforeunload = unloadWindow;
