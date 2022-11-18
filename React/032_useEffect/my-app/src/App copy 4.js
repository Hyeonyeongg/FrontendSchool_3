import { useState, useEffect } from 'react'

function Counter (){
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)
  let test = 0;

  const handleOneUp = (e) => {
    setOne(one + 1)
  }

  const handleTwoUp = (e) => {
    setTwo(two + 1)
  }

  const handleThreeUp = (e) => {
    setThree(three + 1) //렌더링이 되지만 useEffect는 일어나지않음. 배열안에 적혀있지 않기 때문
  }

  const handleTestUp = (e) => {
    test += 1; //일반 변수이므로 작동은 되지만 새로 그려지지는 않음.
    console.log(test);
  }

  //변수를 감시하여 변경이 일어나면 실행시켜줌. 변수를 감시하면서 특정한 코드를 실행시키고 싶을 때 사용. (감시하는 변수가 일반변수일 경우 재랜더링이 일어나지않으므로 일반변수는 해당x)
  useEffect(()=>{
    if (one % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }, [one, two]) //one, two만 감시함.  useState를 사용해서 생성한 변수에 변경이되었을 때만 재랜더링이 일어남.
  // 기본적으로 useEffect는 컴포넌트가 렌더링 될때마다 콜백이 실행됨. useState로 생성된 변수는 재렌더링을 일으키기 때문에 배열안에 useState변수를 넣어서 해당하는 변수의 값의 변화로인해 재랜더링이 일어나면 useEffect가 작동하는 것임.
  
  return (
    <>
      <div>{one}</div>
      <button onClick={handleOneUp}>Up!</button>
      <div>{two}</div>
      <button onClick={handleTwoUp}>Up!</button>
      <div>{three}</div>
      <button onClick={handleThreeUp}>Up!</button>
      {/* 이벤트가 발생해도 재 렌더링이 되지 않습니다. */}
      <div>{test}</div>
      <button onClick={handleTestUp}>Up!</button>
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

