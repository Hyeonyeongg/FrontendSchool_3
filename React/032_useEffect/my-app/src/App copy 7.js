import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count+1) 
  }

  useEffect(() => {
    console.log('실행되었습니다!!')
  }, []) //맨처음에만 실행(맨 처음에 실행되고, 감시할 값이 없으니까 딱 한번만 실행되는 것.)

  return(
    <>
    <div>{count}</div>
    <button onClick={countUp}>up!</button>
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