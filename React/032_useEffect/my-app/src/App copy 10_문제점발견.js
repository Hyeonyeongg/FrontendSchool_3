import {useState, useEffect} from 'react'

export default function App() {
  const [수업여부 , set수업여부] = useState('수업중')
  const [잔고, set잔고] = useState(100000)

  const handleZoomOut = (e) => {
    set수업여부('수업종료') //랜더링을 다시함
  }

  if (수업여부 === '수업종료'  &&  잔고 >= 20000) {
    alert('카페로 출발!')
    set잔고(90000) //여기서 렌더링이 일어나서 무한반복!
  }


  return (
    <div>
      <button onClick={handleZoomOut}>ZoomOut</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  )
}
