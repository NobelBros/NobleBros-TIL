## ‘input 값 입력, 버튼 클릭에 의한 filterting’ 기능구현

### 기능에 대한 설명

1. products를 전개연산자로 가져와줍니다.
2. 초기 화면에는 모든 상품을 그려줍니다. map, join 메서드를 사용했습니다.
3. 검색 Input에 value을 입력시(keyup 이벤트 리스너를 달아줍니다.) inputValue라는 변수로 저장해 filter 메서드로 입력 즉시 필터링합니다.
4. displayButtons함수에서는 중복되는 product company를 없애고(`const buttons = ['all', ...new Set(products.map((product) => product.company))]`) 버튼을 만들어 화면에 그려줍니다. 여기서 중요한 점은 company 버튼 클릭 시 화면에 해당 company 제품들만 필터링되어야 하기 때문에 data-id 값으로 company 를 동적으로 가져옵니다. `data-id="${company}”`
5. 앞서 만든 product company 버튼을 각각 클릭하면 그에 맞는 제품들이 화면에 그려집니다.
   - 여기서 두 개의 경우의 수가 발생하는데 첫 번째 경우는 ‘all’ 버튼 클릭시 모든 상품을 가져와주고 두 번째 경우는, 앞서 버튼을 만들 때 주입한 data-id 활용해서 필터링합니다. 여기서도 filter 메서드를 사용했습니다.

### 기능구현 중 발생한 오류

`new Set`메서드를 사용할때 두 개의 객체를 배열 안에 합치기 때문에 `…` 전개연산자를 빼먹는 것 때문에 디버깅에 오랜시간이 걸렸습니다.

```jsx
const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)), // 전개연산자
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `
        <button class="company-btn" data-id="${company}">${company}</button>
    `;
    })
    .join('');
};
```

### 새로 알게된 점 & 인사이트

`new Set` 은 중복 제거 외에도 교집합, 차집합 요소를 가져올 수 있습니다.

```jsx
// 교집합은 다음으로 흉내(simulate)낼 수 있음
const intersection = new Set([...set1].filter((x) => set2.has(x)));

// 차집합은 다음으로 흉내낼 수 있음
const difference = new Set([...set1].filter((x) => !set2.has(x)));
```
