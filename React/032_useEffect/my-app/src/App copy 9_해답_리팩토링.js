import { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

    console.log("렌더링이 됩니다..?")
  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
    }, 1000);
    return () => {
      clearInterval(time); 
      //이걸 안하면 파생이된다. 다음 렌더링에서 그 전에 남아있던 것을 청소한다. return안에 들어가는 콜백함수는 useEffect에서 여러 함수가 파생되었을 때 그것을 다 청소하고 위에서부터 재실행한다. 컴포넌트를 교체하기 전에 사라지기 전의 컴포넌트를 청소해준다. 없애주지 않으면 setIntervcal을 하고있음. 죽지 않고. 그래서 계속 돌아가는 애들을 청소해서 없애주는 것임. 새로 컴포넌트를 그릴건데 이전에 실행되고 있는 것이 있다면 청소하고 가겠다. 지우기 전에 실행. clearInterval, setInteval은 리액트랑 관련있는 애들이 아님. 바닐라js. clearInterval은 멈춰줌. 더 이상 실행시키지 않아줌.
      //setToday를 통해 today의 값이 바뀌어서 재 랜더링이 일어나서 컴포넌트를 교체할 때 그 전의 컴포넌트를 청소해준다.
    };
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;