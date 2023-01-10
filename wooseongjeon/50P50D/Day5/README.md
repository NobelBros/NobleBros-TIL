# scale 변수에 대하여

## 코드
```
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
```
## 코드 내부 수학적 원리

**과감하게 SKIP**

## 코드 사용 원리

>num은 변경점
>in_min, in_max 내가 지정하고 생각하는 시작점과 도착점
>out_min, out_max 실질적인 시작점과 도착점

나는 0%에서 100%값을 생각하여 순차적으로 오름을 생각할때
적용해야할 부분의 값은 다를 수를 넣어야할때 활용 할 수 있다.

### EX
생각하는 범위 0% ~ 100%
적용대상 예를 들어 opacity, opacity의 값은 0 ~ 1 이 다임...
그러므로 변경을 해줘야한다.
만약 내가 투명도 100%를 생각 할 경우 opacity의 값은 1
투명도 0%의 값은 0.

## 총평
다양하게 활용 가능하다...
