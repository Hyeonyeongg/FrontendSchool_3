import { useState, useMemo } from 'react'

function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const result = useMemo(()=>{
    return 부하()
  }, [countTwo]) //감시할 변수. countTwo 가 변할 때만 부하 함수를 실행하여 다시 result 값을 갱신함.

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo)
  }

  console.log('랜더링!')

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>count: {count}</div>
      <button onClick={handleCountUp}>One UP!</button>
      <div>countTwo: {countTwo}</div>
      <button onClick={handleCountUpTwo}>Two UP!</button>
    </div>
  );
}
export default App;