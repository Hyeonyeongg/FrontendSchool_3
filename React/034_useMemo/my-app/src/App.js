import React, { useMemo, useRef, useState } from 'react'

export default function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo, setUserInfo] = useState([])
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const n = useMemo(() => getNum(userInfo), [userInfo])
  
  function handleInputName(e){
    console.log(e)
    setName(e.target.value)
    console.log('렌더링 - 1')
  }

  function handleInputId(e){
    console.log(e)
    setId(e.target.value)
    console.log('렌더링 - 2')
  }

  function handleSubmit(e){
    e.preventDefault();
    //userInfo.push({}); userInfo는 오로지 setUserInfo로만 값을 변경할 수 있음.
    const newInfo = [...userInfo, {name, id}]
    inputName.current.value='' //사용자는 제출된 것 처럼 보임
    inputId.current.value=''
    inputName.current.focus()
    setUserInfo(newInfo);
    console.log('렌더링 - 3')
  }

  //모든 렌더링에 함께 렌더링 되는 이슈가 있습니다.
  function getNum(li) {
    console.log('렌더링!')
    return li.length
  }

  return (
    <>
      <form>
        <input 
          type='text'
          placeholder='이름을 입력하세요'
          onChange={handleInputName}
          ref={inputName}
        />
        <input 
          type='text'
          placeholder='아이디를 입력하세요'
          onChange={handleInputId}
          ref={inputId}
        />
        <button type='submit' onClick={handleSubmit}>회원 명부 작성</button>
      </form>
      <ul>
        {
          //중괄호{}가 있으면 구문. 리턴되는 애가 바로 들어갈거라면 ()
          userInfo.map((value, index) => (
            <li key={index}>
              <h3>이름 : {value.name}</h3>
              <strong>아이디 : {value.id}</strong>
            </li>
          ))
        }
      </ul>
      <span>{n}</span>
    </>
  )
}

