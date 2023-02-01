const jokeEl = document.getElementById('joke')
// (#sections) -> sections 아이디를 가진 요소를 찾습니다
// (.section) -> section 클래스명을 가진 요소를 찾습니다
// 반환객체는 한개의 요소만 찾을수있으며 동일한 클래스명 을 가진 객체가 있을경우 html문서내의 첫번째를 나타나는 요소를 반환합니다.
const jokeBtn = document.querySelector('.btn') 

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

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

