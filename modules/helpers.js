export const domArray = (selector) => document.querySelectorAll(selector);

export const setUpperCaseClass = (element) => {
  element.classList.add('text_uppercase');
};

export const setLowerCaseClass = (element) => {
  element.classList.remove('text_uppercase');
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
export const createElement = (tagName) => document.createElement(tagName);
export const insertElement = (element, node) => node.appendChild(element);
