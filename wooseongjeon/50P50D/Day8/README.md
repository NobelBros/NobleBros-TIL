# 50P50D - Day8 Form Wave Animation

## HTML
### 1. input - required 속성으로 필수기입 값으로 설정 할 수 있다.

### 2. label 태그는 input요소와 연결하면 몇가지 이점이 있다.
- label 텍스트는 텍스트 입력과 시각적으로 관련이 있을뿐 아니라 프로그래밍적으로도 관련이 있다.
- 예를 들어, 화면리더기는 폼 입력에서 label을 읽어서 보조기술 사용자가 입력해야하는 텍스트가 무엇인지 쉽게 이해 가능.
- 시각장애인들을 위한 input 맞춤 이름표!!

[MDN-label_링크](https://developer.mozilla.org/ko/docs/Web/HTML/Element/label)

__주의사항__
`<label>` 을 `<input>` 요소와 연관시키려면 `<input>` 에 `id` 속성을 넣어야합니다.
그런 다음 `<label>` 에 `id` 와 같은 값의 `for` 속성을 넣어야합니다.
```
<input type="text" id="ID_box">
<label for="ID_box">로그인</label>
```
_다른 사용법 예시_
`<label>` 안에 `<input>` 을 중첩 시킬 수 있습니다. 이경우 연관이 암시적이므로 `for` 및 `id` 속성이 생략 가능하다.
```
<label>Do you like peas?
  <input type="checkbox" name="peas">
</label>
```

## CSS
### 1. valid와 invalid
`input:valid`, `input:invalid` 로 각각 유효한 값과 유효하지 않은 값 효과를 넣을 수 있다.

### 2. transition: cubic-bezier()
`cubic-bezier` ()안에 여러 시간을 넣어 효과를 만들 수 있다.

[cubic-bezier_사이트](https://cubic-bezier.com/)

### 3. transition-delay
`transition-delay` 로 효과 시간을 조정 할 수 있다.


## javaScript
### 1. Element.innerHTML
`innerHTML` 은 요소(element) 내에 포함된 HTML 또는 XML 마크업을 가져오거나 설정한다.

### 2. Element.innerText
`innerText` 는 요소(elment)와 그 자손의 렌더링 된 text content를 나타냅니다.
사용자가 커서를 이용해 요소의 콘텐츠를 선택하고 클립보드에 복사했을 때 얻을 수 있는 텍스트의 근삿값을 제공한다.

### 3. Array.prototype.map()
`map` 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
```
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```
### 분석
1. 지정된 label을 각각 또 지정하고 변경할 HTML값을 지정
2. 내부 텍스트를 `split` 으로 나누어 배열화
3. 배열화된 텍스트를 `map`으로 변환할 값을 각각 적용 하고 재배열
4. 배열을 `join` 으로 문자열로 원상 복귀 시킨다.
