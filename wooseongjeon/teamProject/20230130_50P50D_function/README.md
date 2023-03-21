# 20230130_50P50D_function

## 간단한 FAQ 페이지

FAQ 클릭시 오픈된 다른 FAQ는 닫히고 클릭한 FAQ는 오픈하는 간단한 페이지

## 이슈

처음에는 잘 안되어서 팀원분들께 피드백을 받아 만들었습니다.
- 안된 부분은 지정한 `const faqs = document.querySelectorAll('.faq')` 부분이 arraylike인데 인줄 모르고 `forEach`를 사용하지 않고 만듬
- 그 부분을 수정하여 잘 되었습니다.

## 배운점

문제 되는 부분에 console.log를 활용하여 문제 부분을 알고 수정하여 debugging한다.