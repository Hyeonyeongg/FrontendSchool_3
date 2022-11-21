import React, { useEffect, useLayoutEffect, useState } from "react";

// function one(){
//   console.log('one')
//   return (()=>{
//       console.log('two')
//       return (()=>{
//           console.log('three')
//           return 0
//       })()
//   })()
// }


function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 1')
    return () => { 
      console.log('useLayoutEffect return_1')
    }
  }, [])

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 2')
    return () => {
      console.log('useLayoutEffect return_2')
    }
  }) //렌더링 다시되면 무조건

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 3')
    return () => {
      console.log('useLayoutEffect return_3')
    }
  }, [num]) 

  useEffect(()=>{
    console.log('useEffect 1')
    return () => {
      console.log('useEffect return_1')
    }
  }, []) //최초 한번만 실행되기 때문에 리렌더링 되었을 때 실행 안됨.

  useEffect(()=>{
    console.log('useEffect 2')
    return () => { //리액트 자체에서 실행시켜줌.
      console.log('useEffect return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect return_3')
    }
  }, [num]) //useLayoutEffect위로 올려도 순서대로 실행되지 않고 useLayoutEffect보다 나중에 실행됨.

  return (
    <button onClick={handleonClick}>{num}</button>
  );
}

const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap;