import {useEffect, useState} from 'react'

function getName(){
  console.log('오래기다리는 작업')
  return '개리'
}


function App() {
  // const [name, setName] = useState(getName()) //렌더링 될때마다 getName()이 호출됨.
  const [name, setName] = useState(getName) //오래 기다리는 작업은 한번만 출력됨. 함수를 그대로 넘겨주는 기법.
  const [num, setNum] = useState(0)

  return (
    <>
      <div>안녕하세요 {name}! 현재 숫자는 {num} 입니다!</div>
      <button onClick={()=>setNum((p)=>p+1)}>{num}</button>
    </>
  );
}
export default App;