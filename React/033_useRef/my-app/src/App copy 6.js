import {useState, useRef} from 'react'

export default function App() {
  const nameValue = useRef(null)
  const genderValue = useRef(null)
  const ageValue = useRef(null)
  const [introduce, setIntroduce] = useState('')
  
  const handleIntroduce = () => {
    setIntroduce(`안녕하세요 제 이름은 ${nameValue.current.value} 입니다. 성별은 ${genderValue.current.value} 이고, 나이는 ${ ageValue.current.value} 입니다`);
  }

  return (
    <div>
      <label>
        이름: <input type="text" ref={nameValue}/>
      </label>
      <label>
        성별: <input type="text" ref={genderValue}/>
      </label>
      <label>
        나이: <input type="number" ref={ageValue}/>
      </label>
      <button onClick={handleIntroduce}>자기소개</button>
      <div>
        {introduce}
      </div>
    </div>
  )
}
