const keyCode = [
    [{
            id: 'Backquote',
            ru: 'ё',
            en: '`',
            enS: '~',
        },
        {
            id: 'Digit1',
            ru: '1',
            en: '1',
            enS: '!',
        },
        {
            id: 'Digit2',
            ru: '2',
            en: '2',
            enS: '@',
        },
        {
            id: 'Digit3',
            ru: '3',
            en: '3',
            enS: '#',
        },
        {
            id: 'Digit4',
            ru: '4',
            en: '4',
            enS: '$',
        },
        {
            id: 'Digit5',
            ru: '5',
            en: '5',
            enS: '%',
        },
        {
            id: 'Digit6',
            ru: '6',
            en: '6',
            enS: '^',
        },
        {
            id: 'Digit7',
            ru: '7',
            en: '7',
            enS: '&',
        },
        {
            id: 'Digit8',
            ru: '8',
            en: '8',
            enS: '*',
        },
        {
            id: 'Digit9',
            ru: '9',
            en: '9',
            enS: '(',
        },
        {
            id: 'Digit0',
            ru: '0',
            en: '0',
            enS: ')',
        },
        {
            id: 'Minus',
            ru: '-',
            en: '-',
            enS: '_',
        },
        {
            id: 'Equal',
            ru: '=',
            en: '=',
            enS: '+',
        },
        {
            id: 'Backspace',
            ru: 'Backspace',
            en: 'Backspace',
            width: 'button-wide',
        }
    ],
    [{
            id: 'Tab',
            ru: 'Tab',
            en: 'Tab',
            width: 'button-wide',
        },
        {
            id: 'KeyQ',
            ru: 'Й',
            en: 'Q'
        },
        {
            id: 'KeyW',
            ru: 'Ц',
            en: 'W'
        },
        {
            id: 'KeyE',
            ru: 'У',
            en: 'E'
        },
        {
            id: 'KeyR',
            ru: 'К',
            en: 'R'
        },
        {
            id: 'KeyT',
            ru: 'Е',
            en: 'T'
        },
        {
            id: 'KeyY',
            ru: 'Н',
            en: 'Y'
        },
        {
            id: 'KeyU',
            ru: 'Г',
            en: 'U'
        },
        {
            id: 'KeyI',
            ru: 'Ш',
            en: 'I'
        },
        {
            id: 'KeyO',
            ru: 'Щ',
            en: 'O'
        },
        {
            id: 'KeyP',
            ru: 'З',
            en: 'P'
        },
        {
            id: 'BracketLeft',
            ru: 'Х',
            en: '{'
        },
        {
            id: 'BracketRight',
            ru: 'Ъ',
            en: '}'
        },
        {
            id: 'Backslash',
            ru: '\x5c',
            en: '\x5c',
            width: 'button-wide',
        }
    ],
    [{
            id: 'CapsLock',
            ru: 'CapsLock',
            en: 'CapsLock',
            width: 'button-wide',
        },
        {
            id: 'KeyA',
            ru: 'Ф',
            en: 'A'
        },
        {
            id: 'KeyS',
            ru: 'Ы',
            en: 'S'
        },
        {
            id: 'KeyD',
            ru: 'В',
            en: 'D'
        },
        {
            id: 'KeyF',
            ru: 'А',
            en: 'F'
        },
        {
            id: 'KeyG',
            ru: 'П',
            en: 'G'
        },
        {
            id: 'KeyH',
            ru: 'Р',
            en: 'H'
        },
        {
            id: 'KeyJ',
            ru: 'О',
            en: 'J'
        },
        {
            id: 'KeyK',
            ru: 'Л',
            en: 'K'
        },
        {
            id: 'KeyL',
            ru: 'Д',
            en: 'L'
        },
        {
            id: 'Semicolon',
            ru: 'Ж',
            en: 'P'
        },
        {
            id: 'Quote',
            ru: 'Э',
            en: '"'
        },
        {
            id: 'Enter',
            ru: 'Enter',
            en: 'Enter',
            width: 'button-wide',
        }
    ],
    [{
            id: 'ShiftLeft',
            ru: 'Shift',
            en: 'Shift',
            width: 'button-wide',
        },
        {
            id: 'KeyZ',
            ru: 'Я',
            en: 'Z'
        },
        {
            id: 'KeyX',
            ru: 'Ч',
            en: 'X'
        },
        {
            id: 'KeyC',
            ru: 'С',
            en: 'C'
        },
        {
            id: 'KeyV',
            ru: 'М',
            en: 'V'
        },
        {
            id: 'KeyB',
            ru: 'И',
            en: 'B'
        },
        {
            id: 'KeyN',
            ru: 'Т',
            en: 'N'
        },
        {
            id: 'KeyM',
            ru: 'Ь',
            en: 'M'
        },
        {
            id: 'Comma',
            ru: 'Б',
            en: '<'
        },
        {
            id: 'Period',
            ru: 'Ю',
            en: '>'
        },
        {
            id: 'Slash',
            ru: ',',
            en: '?'
        },
        {
            id: 'ArrowUp',
            ru: '▲',
            en: '▲'
        },
        {
            id: 'ShiftRight',
            ru: 'Shift',
            en: 'Shift',
            width: 'button-wide',
        }
    ],
    [{
            id: 'ControlLeft',
            ru: 'Ctrl',
            en: 'Ctrl',
            width: 'button-wide',
        },
        {
            id: 'MetaLeft',
            ru: 'Meta',
            en: 'Meta',
            width: 'button-wide',
        },
        {
            id: 'AltLeft',
            ru: 'Alt',
            en: 'Alt',
            width: 'button-wide',
        },
        {
            id: 'Space',
            ru: 'Space',
            en: 'Space',
            width: 'button-space',
        },
        {
            id: 'AltRight',
            ru: 'Alt',
            en: 'Alt',
            width: 'button-wide',
        },
        {
            id: 'ControlRight',
            ru: 'Ctrl',
            en: 'Ctrl'
        },
        {
            id: 'ArrowLeft',
            ru: '◄',
            en: '◄'
        },
        {
            id: 'ArrowDown',
            ru: '▼',
            en: '▼'
        },
        {
            id: 'ArrowRight',
            ru: '►',
            en: '►'
        }
    ],
];

export { keyCode }