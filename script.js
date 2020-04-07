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
  const textArea = document.querySelector('.text-area');
  textArea.focus();
  if (event.target.classList.contains('text-area')) {
    state.cursor = textArea.selectionStart;
  }
  if (event.target.classList.contains('button_overlay')) {
    if (event.target.classList.contains('print')) {
      textArea.value += event.target.innerText;
    } else {
      textArea.selectionStart = state.cursor;
      textArea.selectionEnd = state.cursor;
      let clickEvent = new KeyboardEvent('keydown', {
        code: `${event.target.innerText}`,
        key: `${event.target.innerText}`,
      });
      document.dispatchEvent(clickEvent);
      clickEvent = new KeyboardEvent('keyup', {
        code: `${event.target.innerText}`,
        key: `${event.target.innerText}`,
      });
      document.dispatchEvent(clickEvent);
    }
  }
};

const handleKeyDown = (event) => {
  const textArea = document.querySelector('.text-area');
  const keysNodeList = domArray('.print');
  const activeKey = document.querySelector(`#${event.code}`);
  activeKey.classList.add('button--active');
  event.preventDefault();
  if (event.key === 'Shift' && event.repeat === false) {
    setHideAll(keysNodeList, 'hide');
    setShowAll(keysNodeList, `${state.currentLanguage}S`, 'hide');
  }

  if (event.key === 'Shift' && event.repeat === false && event.getModifierState('CapsLock')) {
    keysNodeList.forEach((element) => {
      setHideAll(keysNodeList, 'hide');
      setShowAll(keysNodeList, `${state.currentLanguage}`, 'hide');
      setLowerCaseClass(element);
    });
  }

  if (event.ctrlKey && event.altKey) {
    setHideAll(keysNodeList, 'hide');
    state.changeLanguage();
    setShowAll(keysNodeList, `${state.currentLanguage}`, 'hide');
  }
  if (event.code === 'Tab') {
    textArea.value += '    ';
    state.cursor = textArea.selectionStart;
  }
  if (event.code === 'Space') {
    textArea.value += ' ';
    state.cursor = textArea.selectionStart;
  }
  if (event.code === 'Enter') {
    textArea.value += '\n';
  }
  if (event.code === 'Backspace') {
    if (textArea.value.length === 0) {
      textArea.value = '';
    } else {
      textArea.selectionStart = state.cursor;
      textArea.selectionEnd = state.cursor;
      textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionStart);
      state.cursor = textArea.selectionStart;
    }
  }
  if (event.keyCode >= 49 && event.keyCode <= 90) {
    textArea.value += activeKey.querySelector('.data-active').innerText;
    state.cursor = textArea.selectionStart;
  }
  if (event.keyCode >= 36 && event.keyCode <= 48) {
    textArea.value += activeKey.querySelector('.data-active').innerText;
    state.cursor = textArea.selectionStart;
  }
  if (event.keyCode >= 219 && event.keyCode <= 222) {
    textArea.value += activeKey.querySelector('.data-active').innerText;
    state.cursor = textArea.selectionStart;
  }
  if (event.keyCode >= 186 && event.keyCode <= 192) {
    textArea.value += activeKey.querySelector('.data-active').innerText;
    state.cursor = textArea.selectionStart;
  }
};

const handleKeyUp = (event) => {
  const keysNodeList = domArray('.print');
  event.preventDefault();
  if (event.key === 'CapsLock' && event.getModifierState('CapsLock')) {
    keysNodeList.forEach((element) => {
      setUpperCaseClass(element);
    });
    const activeKey = document.querySelector(`#${event.key}`);
    activeKey.setAttribute('style', 'background:  #f4b300');
  }
  if (
    event.key === 'CapsLock'
    && event.getModifierState('CapsLock') === false
  ) {
    keysNodeList.forEach((element) => {
      setLowerCaseClass(element);
    });
    const activeKey = document.querySelector(`#${event.key}`);
    activeKey.setAttribute('style', 'background:  #d1d1d1');
  }
  if (event.key === 'Shift') {
    setHideAll(keysNodeList, 'hide');
    setShowAll(keysNodeList, `${state.currentLanguage}`, 'hide');
  }
  if (event.key === 'Shift' && event.repeat === false && event.getModifierState('CapsLock')) {
    keysNodeList.forEach((element) => {
      setHideAll(keysNodeList, 'hide');
      setShowAll(keysNodeList, `${state.currentLanguage}S`, 'hide');
      setLowerCaseClass(element);
    });
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
  document.addEventListener('click', handleClick);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
};

const unloadWindow = () => {
  localStorage.clear();
  localStorage.setItem('lang', state.currentLanguage);
};

window.onload = initialize();
window.onbeforeunload = unloadWindow;
