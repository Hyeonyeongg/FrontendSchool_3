import { useState, useEffect, useLayoutEffect } from 'react'

function App() {
  const [value, setValue] = useState(100);
  
  // useEffect는 return구문에 있는 태그들이 먼저 그려지고(paints) 그 이후에 실행됨. 따라서, 만약 커져랏! 버튼을 누르면 리렌더링이 일어나는데 value의 값이 1000으로 바뀌고, 바뀐 값이 화면에 그려지고 난 이후에 useEffect가 실행되어 setValue(300)를 호출하기 때문에 깜빡임이 발생하게 됨. (사용자한테 이미 1000을 보여지고 난 이후에 300으로 바꾸기 때문에 깜박임이 발생하는 것.)

  // useEffect(() => {
  //   if (value >= 1000) {
  //     setValue(300);
  //   }
  // }, [value]);
  
  //useLayoutEffect는 페인팅 되기 전에 실행되기 때문에  깜박거리지 않음.
  //변수 감시, 페인팅 이후에 실행되려면 useEffect, 페인팅 이전에 실행되려면 useLayoutEffect
  
  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);
  
  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
      <button onClick={() => {setValue(1000)}}>커져랏!</button>
      <button onClick={() => {setValue(200)}}>작아져랏!</button>
    </div>
  )
}

export default App;
