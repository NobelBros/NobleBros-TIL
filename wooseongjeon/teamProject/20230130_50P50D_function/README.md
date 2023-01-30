# Day11 Event KeyCodes

## CSS
`small` 요소는 덧붙이는 글이나, 저작권과 볍률 표기 등의 작은 텍스트를 나타낸다.

## javascript
`element.innerHTML`을 통해 HTML을 바꿀 수 있다.
```
insert.innerHTML = /*html*/`
  <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${event.keyCode}
    <small>evet.keyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
  `
```