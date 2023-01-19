## 5판 3선승 가위바위보 게임

### 1. ‘가위’, ‘바위’, ‘보’ 이미지가 한 개의 이미지 파일에 모두 있기 때문에 `rspX`이름으로 객체를 만들어 가져옵니다.

```jsx
const rspX = {
  scissors: '0',
  rock: '-220px',
  paper: '-440px',
};

$computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
```

### 2. 컴퓨터의 초기값(`computerChoice`)은 `scissors`로 설정합니다.

- `computerChoice`이 `scissors` 일땐 `rock` 을 할당해 이미지를 변하게 하고
- 이미지가`rock` 이 되면 `paper` 할당, 다시 `paper`가 되면 `scissors`로 변하게 합니다. 이 3가지 동작을 `setInterval`메서드를 사용해 50ms 딜레이로 반복합니다.
- 그리고 이 메서드를 `intervalId` 이름의 변수로 할당합니다.

```jsx
let computerChoice = 'scissors';
const changeComputerHand = () => {
  if (computerChoice === 'scissors') {
    // 가위면
    computerChoice = 'rock';
  } else if (computerChoice === 'rock') {
    // 바위
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') {
    // 보
    computerChoice = 'scissors';
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px';
};

let intervalId = setInterval(changeComputerHand, 50);
```

### 3. 컴퓨터의 가위바위보 로직을 작성했으면, 이제 내가 낼 가위바위보 값(myChoice) 로직을 작성합니다.

3-1. 가위, 바위, 보 버튼이 3개 있고, 각각의 버튼을 클릭하면 컴퓨터가 낸 값(`computerChoice`)과 내가 낸 값(`myChoice`)을 비교합니다.

3-2. 비교한 후 ‘승리조건’, ‘패배조건’ 점수 테이블에 따라 ‘나의 승리’ 혹은 ‘컴퓨터 승리’ 메시지를 보여줍니다.

3-3. 3번 이상 이기면 게임이 끝나는 로직입니다.

### 3번의 로직대로 작성합니다.

3-1. 우선 가위, 바위, 보 버튼을 각각 클릭하면 `clickButton` 이라는 함수가 실행되게 합니다.

```jsx
$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
```

컴퓨터가 낸 값(`computerChoice`)과 내가 낸 값(`myChoice`)을 비교하기 위해서는 각각의 초기값을 설정합니다.

```jsx
let computer = 0;
let me = 0;
```

내가 낸 값(`myChoice`)은 연속 삼항연산자를 사용합니다.

- rock버튼을 클릭했을 때, 클릭한 버튼의 문자가 ‘바위’이면 ‘rock’이고 아니면 (문자가 ’가위’면 `scissors` (아니면 ‘paper’))

```jsx
const myChoice =
  e.target.textContent === '바위'
    ? 'rock'
    : e.target.textContent === '가위'
    ? 'scissors'
    : 'paper';
```

- 내가 ‘가위바위보’ 버튼을 클릭함과 동시에 `computerChoice` 의 `setInterval`을 `clearInterval` 로 중지시킵니다. 중지시키고 내가 낸 값과 컴퓨터의 값을 비교합니다.

```jsx
clearInterval(intervalId);
```

- 값을 비교하기 전에 ‘가위바위보’버튼을 또 클릭하게 되면, 이전에 생성한 `addEventListener` (`$rock.addEventListener('click', clickButton)`)가 계속 생성되서 버그가 발생합니다.
- 버그를 해결하기 위해, 여기서 [플래그 변수](https://deseul.tistory.com/14)를 사용합니다. `clickable` 이름으로 변수를 생성해 초기값은 `true` , `clearInterval` 을 했으면 `clickable`을 `false` 로 다시 할당합니다. 그리고 `clickButton`의 전체로직을 `if (clickable) {}`로 감쌉니다.

3-2. 비교한 후 ‘승리조건’, ‘패배조건’ 점수 테이블에 따라 ‘나의 승리’ 혹은 ‘컴퓨터 승리’ 메시지를 보여줍니다.

- 비교 값은 `includes` 메서드로 true, false를 반환해 비교문(`if`)을 실행합니다.
- 나의 승리시 +1, 패배시 컴퓨터 +1

```jsx
const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

const myScore = scoreTable[myChoice];
const computerScore = scoreTable[computerChoice];
const diff = myScore - computerScore;
let message = '';

if ([2, -1].includes(diff)) {
  me += 1;
  message = '승리';
} else if ([-2, 1].includes(diff)) {
  computer += 1;
  message = '패배';
} else if ([0].includes(diff)) {
  message = '무승부';
}
```

3-3. 3번 이상 이기면 게임이 끝나는 로직 작성

- 첫번째 판이 끝나면 1초 뒤에 다시 시작할 수 있게 `setTimeout` 메서드를 사용하고 ‘가위바위보’버튼을 다시 클릭할 수 있게 `clickable = true` 로 세팅합니다.

```jsx
if (me >= 3) {
  $score.append(`나의 승리 ${me} : ${computer}`, document.createElement('br'));
} else if (computer >= 3) {
  $score.append(
    `컴퓨터 승리 ${me} : ${computer}`,
    document.createElement('br')
  );
} else {
  $score.append(`${message} ${me} : ${computer}`, document.createElement('br'));
  setTimeout(() => {
    clickable = true;
    intervalId = setInterval(changeComputerHand, 50);
  }, 1000);
}
```

### 새로 알게된 점 & 인사이트

- 로직을 작성할 때 알고리즘 다이어그램을 그리면 버그 발생시 어느 부분이 문제 있는지 확인이 가능하고 로직을 수정할 수 있습니다.
- `(diff === 2 || diff === -1)`처럼 if문 안에 조건문이 길어질 땐 `[2, -1].includes(diff)` 메서드를 사용해 간단히 나타낼 수 있습니다.
