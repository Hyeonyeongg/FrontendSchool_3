import { createContext } from 'react'

const Value = createContext({price:1000})

//props drilling이 발생되면 context사용

function Three(){
  return (
    // 컨슈머 밑에 바로 자식 태그가 들어가면 안됨. 
    <Value.Consumer>
      {(value) => (<p>{value.price}</p>)}
    </Value.Consumer>
  )
}

function Two(){
  return (
    <div>
      Two
      <Three/>
    </div>
  )
}

function One(){
  return (
    <div>
      One
      <Two/>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <One/>
    </div>
  )
}