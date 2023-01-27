// 토글버튼 만들기
const _toggleBtn = _get('.toggleBtn')
const _toggleTarget = _get('.toggleTarget')


const toggleEvent = () => {
  if(_toggleTarget.className == 'toggleTarget'){
    _toggleTarget.className = 'toggleTarget on'
  } else {
    _toggleTarget.className = 'toggleTarget'
  }
}

_toggleBtn.addEventListener('click', toggleEvent)