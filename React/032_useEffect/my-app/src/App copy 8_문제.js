import React, { useState, useEffect } from 'react';

function Time(props) {
  const [today, setToday] = useState(new Date()); //Thu Nov 17 2022 17:32:55 GMT+0900 
  const [hour, setHour] = useState(today.getHours()); //17
  const [min, setMin] = useState(today.getMinutes()); //32
  const [sec, setSec] = useState(today.getSeconds()); //55
  console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

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