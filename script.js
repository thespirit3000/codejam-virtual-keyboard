import keyCode from './modules/keys.js';

import {
  domArray,
  setUpperCaseClass,
  setLowerCaseClass,
  insertElement,
  createElement,
  setHideAll,
  setShowAll,
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
    const textArea = document.querySelector('.text-area');
    textArea.value += event.target.innerText;
  }
};

const handleKeyDown = (event) => {
  const textArea = document.querySelector('.text-area');
  const keysNodeList = domArray('.print');
  const activeKey = document.querySelector(`#${event.code}`);
  activeKey.classList.add('button--active');
  const cursor = textArea.selectionStart;
  const { length } = textArea.value;
  event.preventDefault();
  if (event.key === 'Shift' && event.repeat === false) {
    setHideAll(keysNodeList, 'hide');
    setShowAll(keysNodeList, `${state.currentLanguage}S`, 'hide');
  }

  if (event.ctrlKey && event.altKey) {
    setHideAll(keysNodeList, 'hide');
    state.changeLanguage();
    setShowAll(keysNodeList, `${state.currentLanguage}`, 'hide');
  }
  if (event.key === 'Tab') {
    textArea.value = `${textArea.value.slice(0, textArea.selectionStart)
    }    ${textArea.value.slice(textArea.selectionStart, length)}`;
    textArea.selectionStart = cursor + 4;
    textArea.selectionEnd = textArea.selectionStart;
  }
  if (event.code === 'Space') {
    textArea.value = `${textArea.value.slice(0, textArea.selectionStart)
    } ${textArea.value.slice(textArea.selectionStart, length)}`;
    textArea.selectionStart = cursor + 1;
    textArea.selectionEnd = textArea.selectionStart;
  }
  if (event.code === 'Enter') {
    textArea.value += '\n';
  }
  if (event.code === 'Backspace') {
    textArea.value = textArea.value.slice(0, textArea.selectionStart - 1)
    + textArea.value.slice(textArea.selectionStart, length);
    textArea.selectionStart = cursor - 1;
    textArea.selectionEnd = textArea.selectionStart;
  }
  if (event.keyCode >= 49 && event.keyCode <= 90) {
    textArea.value += activeKey.querySelector('.data-active').innerText;
  }
  if (event.keyCode >= 36 && event.keyCode <= 48) {
    textArea.value += activeKey.querySelector('.data-active').innerText;
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
    setHideAll(keysNodeList, 'hide');
    setShowAll(keysNodeList, `${state.currentLanguage}`, 'hide');
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
  setShowAll(toShow, `${state.currentLanguage}`, 'hide');
  document.addEventListener('mousedown', handleClick);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
  document.addEventListener('focus', handleKeyUp);
};

const unloadWindow = () => {
  localStorage.clear();
  localStorage.setItem('lang', state.currentLanguage);
};

window.onload = initialize();
window.onbeforeunload = unloadWindow;
