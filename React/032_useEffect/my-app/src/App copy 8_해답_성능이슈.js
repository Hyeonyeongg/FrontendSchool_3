import React, { useState, useEffect } from 'react';

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  // 성능이슈가 발생되는 공간 (setInterval() 함수는 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용)
  setInterval(() => {
    const t = new Date();
    setToday(t); //다시 렌더링됨. (밑에있는게 아직 안끝난상태에서 렌덜이됨. 한번에 4게씩 렌더링됨. 4의승수만큼 늘어남.)
    setHour(t.getHours()); //(또 렌더링)
    setMin(t.getMinutes()); //(또 렌더링)
    setSec(t.getSeconds()); //(또 렌더링)
  }, 1000);
  

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Time/>
    </div>
  );
}

export default App;