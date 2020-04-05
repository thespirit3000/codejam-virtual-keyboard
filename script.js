import keyCode from './modules/keys.js';

import {
  domArray,
  setUpperCaseClass,
  setLowerCaseClass,
  toggleKeyCase,
  insertElement,
  createElement,
} from './modules/helpers.js';

import {
  renderHTML,
  renderFooter,
} from './modules/render.js';

import Print from './modules/Print.js';
import NormalKey from './modules/NormalKey.js';


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

// -----------Event Handlers-----------------------
const handleClick = (event) => {
  if (event.target.classList.contains('print')) {
    // const clickEvent = new KeyboardEvent('keydown', {
    //   code: `${id}`,
    //   key: `${active.innerText}`,
    // });
    // document.dispatchEvent(clickEvent);
    const textArea = document.querySelector('.text-area');
    textArea.value += event.target.innerText;
  }
};

const handleKeyDown = (event) => {
  const keysNodeList = domArray('.print');
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
  const activeKey = document.querySelector(`#${event.code}`);
  activeKey.classList.add('button--active');
  if (event.keyCode >= 49) {
    textArea.value += activeKey.querySelector(`.${state.currentLanguage}`).innerText;
  }
};

const handleKeyUp = (event) => {
  const keysNodeList = domArray('.print');
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
  const activeKey = document.querySelector(`#${event.code}`);
  activeKey.classList.remove('button--active');
};
// -----------Initialization-----------------------
const initialize = () => {
  renderHTML();
  const keyboard = createElement('div');
  keyboard.classList.add('keyboard');
  insertElement(keyboard, document.querySelector('#keyboard'));
  renderFooter();
  keyCode.forEach((element) => {
    const row = createElement('div');
    row.classList.add('keyboard-row');
    insertElement(row, keyboard);
    element.forEach((key) => {
      const printer = new Print(
        new NormalKey(key),
      );
      row.insertAdjacentHTML('beforeend', printer.printHTML());
    });
  });

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
  // document.addEventListener('mouseup', handleClick);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
};

const unloadWindow = () => {
  localStorage.clear();
  localStorage.setItem('lang', state.currentLanguage);
};

window.onload = initialize;
window.onbeforeunload = unloadWindow;
