# 50P50D - Day9 Sound Board

## HTML
### audio
HTML `audio` 요소는 문서에 소리 콘텐츠를 포함 할 때 사용한다. `src` 특성을 사용해 한개 이상의 오디오 소스를 지정할 수 있으며, 다수를 지정한 경우 가장 적절한 소스를 브라우저가 고른다.

## javaScript
### 1.배열
배열내에 각각 요소의 `ID` 값을 넣어 지정 할 수 있다.

### 2.play()
`play()` 로 `audio` 요소 내의 소리 콘텐츠를 재생할 수 있다.

### 3.pause()
`pause()` 로 `audio` 요소 내의 소리 콘텐츠를 정지가 아닌 _일시정지_ 할 수 있다.
`pause()` 는 _일시정지_ 이므로 다시 재생시 정지된 시간에서 이어서 재생된다.

### 4.currentTime
`currentTime` 으로 시간을 요소의 현재시간을 지정 할 수 있다.
예를 들어 `element.currentTime = 0` 은 `element` 의 시간이 0초라는 말과 같다.

### 분석
1. `audio` 요소 내의 `id` 값을 배열로 만든다.
2. 배열을 `forEach` 로 각각 지정 후 `button` 요소 생성 클래스 지정 내부 텍스트 `id` 값과 같게 지정
3. click 이벤트로 `stop` 과 `play` 만들기
4. `stopSongs()` 일시정지된 콘텐츠의 `currnetTime` 을 0으로 지정하여 다음번 눌렀을 때 처음부터 재생되게 지정
