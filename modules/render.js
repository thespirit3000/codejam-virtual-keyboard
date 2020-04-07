const wrapperNode = () => `
    <div class="wrapper">
        <h2>codejam-virtual-keyboard</h2>
        <textarea id='input-text' name="text" class='text-area' rows="8"></textarea>
    </div>
    <div id='keyboard' class="wrapper">
    </div>
    `;

const footerNode = () => `
    <div class='width-wrapper'>
        <h5 class='footer'>Клавиатура создана в операционной системе Windows</h5>
        <h5 class='footer'>Для переключения языка комбинация: левыe ctrl + alt</h5>
    </div>
    `;

export const renderHTML = () => {
  document.body.insertAdjacentHTML('afterbegin', wrapperNode());
};

export const renderFooter = () => {
  document.body.insertAdjacentHTML('beforeend', footerNode());
};
