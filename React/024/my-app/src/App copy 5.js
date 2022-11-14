import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0); //이것도 일종의 구조분해할당.
  const [message, setMessage] = useState('hello'); //왜 이런걸로 변수를 관리해야할까? 원래는 Resume 함수가 다시 호출되면 이 값(message)을 기억하지 못함. 하지만, useState는 함수가 다시 호출될 때도 변수를 기억해줌. 그리고 변수가 변하는 것을 감시해줌. 그리고 그것에 따라서 다시 렌더링해줌. useState로 만들어진 변수이기 때문에 함수가 다시 호출되어도 기억된다!

  // const [a, b] = useState(0);
  // const 내맘대로 = useState(0);
  // 내맘대로[0], 내맘대로[1];

  function handleClickLike() {
    // setLike(like + 1);
    // console.log(like);
    setLike(like + 1); //like값이 변동됐으므로 useState가 이를 감시하고 있다가 변동되면 Resume함수를 다시 호출하여 랜더링을 다시해줌.
  }

  function handleMouseOver() {
    console.log('hello');
    setMessage('world');
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
      <button onMouseOver={handleMouseOver}>마우스 오버해보세요.</button>
      <p>{message}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;
