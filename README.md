# codejam-virtual-keyboard
Virtual keyboard RSS task

**[Completed deploy Gh-pages](https://thespirit3000.github.io/codejam-virtual-keyboard/)**

![](https://i.imgur.com/MUYRlDL.png)


## Критерий оценки:
**Максимальный балл за задание: 110**

`минимальный набор:`
- реализована генерация DOM-элементов и `body` в index.html пустой изначально (может находится только тег `script`): `+20`
- нажатие на кнопку на физической клавиатуре подсвечивает кнопку на виртуальной(проверять следуюет нажатие цифр, букв, знаков припинания, `backspace`, `del`(если она присутствует), `enter`, `shift`, `alt`, `ctrl`, `tab`, `caps lock`, `space`, стрелки вниз-вверх-влево-вправо): `+10`

`стандартный набор:`
- есть переключение между русским и английским языком(сочетание клавиш для переключения языка должно быть указано на странице с клавиатурой), а так же сохранение выбранного языка: `+15`
- клики мышкой по кнопкам на виртуальной клавиатуре или нажатие на кнопки физической 
клавиатуры, выводят символы в инпут(textarea): `+15`

`дополнительный набор:`
- реализована анимация нажатия на кнопку: `+15`

`технические требования:`
- использование в коде фишек стандарта ES6 и выше (classes, деструктуризация и т.д.): `+15`
- использование eslint: `+10`
- требования к репозиторию, коммитам и PR выполнены: `+10`

`штрафы:`
- ошибки в консоли, связанные с исполняемым кодом(ошибки типа `favicon.ico: Failed to load resource: the server responded with a status of 404` не учитываются) или предупреждения eslint-config-airbnb-base: `-15`

## FAQ
https://www.youtube.com/watch?v=1wefQGlnPis&feature=youtu.be

## Материалы по теме:

- [Demo](https://wonderful-swartz-d8b98d.netlify.com/)
- [DOM](http://learn.javascript.ru/document)
- [Video DOM](https://www.youtube.com/watch?v=TewWd-6ZrmE)
- [Event](http://learn.javascript.ru/event-details)
- [Video DOM Events](https://www.youtube.com/watch?v=vcXehC9JgGU&feature=youtu.be)
- [Video DOM & DOM Events](https://www.youtube.com/watch?v=UaCGsLvviCA&index=11&list=PLe--kalBDwjhdXudsOpKooP6q9bAl3rPG)
- [An Introduction To DOM Events](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/)
- [Keycode](https://keycode.info)
- [Клавиатура](https://learn.javascript.ru/keyboard-events)
- [eslint (eslint-config-airbnb-base)](https://eslint.org/)
