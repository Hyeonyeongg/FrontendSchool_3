import React, { useState, useEffect } from 'react';

//처음 렌더링 되었을 때 alert창 안뜨게 하는법 1
function Counter() {
  const [count, setCount] = useState(0)
  const [checkRender, setCheckRender] = useState(false);
  const countUp =()=>{
    
    setCount(count+1)
    
  }

  //화면에 첫 렌더링이 될 때 실행되고, count의 값이 바뀔 때 실행됨.
  useEffect(() => {
    if (checkRender) { //처음 렌더링 될 때 checkRender의 값은 false이므로 해당 조건문을 패스함.
      if(count%2){
        alert("홀수입니다")
      }else{
        alert("짝수입니다")
      }
    } else {
      setCheckRender(true); //checkRender의 값이 true로 바뀌어 다시 랜더링이 일어나지만, 해당 useEffect는 count의 값이 변경되었을 때만 실행되므로 재랜더링이 되었을 때 useEffect는 실행되지 않고 패스함.
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