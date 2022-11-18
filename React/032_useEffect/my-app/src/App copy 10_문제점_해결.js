import {useState, useEffect} from 'react'

export default function App() {
  const [수업여부 , set수업여부] = useState('수업중')
  const [잔고, set잔고] = useState(100000)

  const handleZoomOut = (e) => {
    set수업여부('수업종료') //랜더링을 다시함
  }

  //SETSTATE를 여러개면 어떤 특정하 ㄴ구문안에서 SETSTATE를 만지는 것은 무한반복을 일으킬 수 있음. 

  useEffect(()=>{
    if (수업여부 === '수업종료'  &&  잔고 >= 20000) {
      alert('카페로 출발!')
      set잔고(90000) //잔고가 바뀌었지만 useEffect는 수업여부가 바뀌었을 때 실행되므로 다시 랜더링되었을 때 useEffect는 실행되지 않음.
    }
  }, [수업여부])
  


  return (
    <div>
      <button onClick={handleZoomOut}>ZoomOut</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  )
}
