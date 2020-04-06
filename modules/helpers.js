export const domArray = (selector) => document.querySelectorAll(selector);

export const setUpperCaseClass = (element) => {
  element.classList.add('text_uppercase');
};

export const setLowerCaseClass = (element) => {
  element.classList.remove('text_uppercase');
};

export const setActiveSelector = (element) => {
  element.classList.add('data-active');
};


export const removeActiveSelector = (element) => {
  if (element.classList.contains('data-active')) {
    element.classList.remove('data-active');
  }
};

export const toggleKeyCase = (keyNodeArray, upperSelector) => {
  keyNodeArray.forEach((element) => {
    if (element.classList.contains(upperSelector)) {
      element.classList.remove(upperSelector);
    } else {
      element.classList.add(upperSelector);
    }
  });
};

export const setHideAll = (keyNodeArray, hideSelector) => {
  keyNodeArray.forEach((element) => {
    if (element.classList.contains(hideSelector) === false) {
      element.classList.add(hideSelector);
      removeActiveSelector(element);
    }
  });
};

export const setShowAll = (keyNodeArray, selectorToShow, hideSelector) => {
  keyNodeArray.forEach((element) => {
    if (element.classList.contains(selectorToShow) === true) {
      element.classList.remove(hideSelector);
      setActiveSelector(element);
    }
  });
};


export const createElement = (tagName) => document.createElement(tagName);
export const insertElement = (element, node) => node.appendChild(element);
