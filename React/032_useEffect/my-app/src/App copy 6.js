import React, { useState, useEffect } from 'react';

//처음 렌더링 되었을 때 alert창 안뜨게 하는법 2
function Counter() {
  const [count, setCount] = useState(0)
  const countUp = () => {
    
    setCount(count+1)
    
  }

  useEffect(() => {
    if (count !== 0) { //처음 렌더링 되었을 때 count의 값은 0이므로 패스.
      if(count%2){
        alert("홀수입니다")
      }else{
        alert("짝수입니다")
      }
    }
  }, [count])
  
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