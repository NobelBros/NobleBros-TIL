const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')
// (#sections) -> sections 아이디를 가진 요소를 찾습니다.
// (.section) -> section 클래스명을 가진 요소를 찾습니다.
// 반환객체는 한개의 요소만 찾을수있으며 동일한 클래스명 을 가진 객체가 있을경우 html문서내의 첫번째를 나타나는 요소를 반환합니다.
// querySelectorAll()querySelect 과 동일하게 작동하나 차이점은 해당 선택자에 해당하는 모든 요소를 가져옵니다.
// 반환객체는 nodeList이기때문에 for문 또는 foreach 문을 사용해야 합니다.
// 또한 (',') 을 사용하면  여러요소를 한번에 가져올수있습니다.

// const jokeBtn = document.querySelector('.btn') 

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// 신코드
function generateJoke(){
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  fetch('https://icanhazdadjoke.com', config)
    .then((res)=>res.json())
    .then((data)=> {
      jokeEl.innerHTML = data.joke
    })
}

// 구코드
// function generateJoke(){
//   const config = {
//     headers: {
//       Accept: 'application/json'
//     }
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res)=>res.json())
//     .then((data)=> {
//       jokeEl.innerHTML = data.joke
//     })
// }

