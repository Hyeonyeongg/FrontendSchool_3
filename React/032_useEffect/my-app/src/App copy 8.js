import React, { useState, useEffect } from 'react';

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
      setHour(t.getHours());
      setMin(t.getMinutes());
      setSec(t.getSeconds());
    }, 1000);
    return () => {
      //컴포넌트가 사라지기 전에 setinterval을 clearinterval해줍니다. 파생되는 것을 막아줌.  한번사이클이 돌면 더이상 돌지 않게. 
      //1초가 지나면 컴포넌트가 교체되는데 그 전의 컴포넌트를 삭제해준다. 삭제하지 않으면 그 전의 컴포넌트가 계속 파생됨.
      clearInterval(time); //clearInterval() 함수를 호출하면 코드가 주기적으로 실행되는 것을 중단시킬 수 있다.
    };//컴포넌트가 교체되기 직전. setToday, setHour, setMin, setec로 새로운 컴포넌트가 교체되기 적전에  clearInterval호출되고 그다음에 그려진다. 
  }, [today]);

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