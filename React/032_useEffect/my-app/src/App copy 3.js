import { useState, useEffect } from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  let test = 0; //랜더링이 일어날때마다 초기화가 됨.

  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  const handleTestCountUp = (e) => {
    test += 1; 
    console.log(test);
  }

  
  useEffect(()=>{
    if (count % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }) //렌더링 될 때 실행. 컴포넌트가 업데이트 될 때마다 매번 실행
  

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
      <div>{test}</div>
      <button onClick={handleTestCountUp}>Up!</button>
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