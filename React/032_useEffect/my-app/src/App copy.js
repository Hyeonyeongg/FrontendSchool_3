import {useState} from 'react'

function Counter (){
  const [count, setCount] = useState(0) //0로 count초기화
  const handleCountUp = (e) => {
    setCount(count + 1) //재랜더링
  }
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;