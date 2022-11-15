function Hello(props) {
    const name = props.name;
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const numComponentsArray = num.map(v => <p key={v.toString()}>안녕, {name} {v}호</p>)
    // const numComponentsArray = num.map((v, i) => <p key={i}>안녕, {name} {v}호</p>) //이렇게는 키를 인덱스로 하는 것은 권장하지 않음.

    console.log(numComponentsArray);
  return(
    <div>
      {/* 콤마를 없애고 요소를 밖으로 꺼냄. 이것을 리스트로 렌더링 한다고 얘기합니다. 리스트로 렌더링됐을 때는 고유한 키값을 넣어줘야함. */}
      {/* {['hello', 'world', 3, 4, 5]} */}

      {numComponentsArray}
      {/* 드물지만 이런 경우가 생길 수 있으므로 권장하지 않는다는 얘기입니다. 키가 중복된다는 에러가 발생합니다.리스트 같은 것이 두개가합쳐져서 key값이 유일하지 않음. 따라서 키값을 인덱스로 주면 안됨. (사실, 문자열로 줬을 때도 중복됐다고 뜸)*/}
      {/* {numComponentsArray.concat(numComponentsArray)} */}

      {/* <h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      <h1>안녕, {name} 6호</h1>
      <h1>안녕, {name} 7호</h1>
      <h1>안녕, {name} 8호</h1>
      <h1>안녕, {name} 9호</h1>
      <h1>안녕, {name} 10호</h1> */}
    </div>
  )
}

function App() {
  return (
    <Hello name="licat"/>
  );
}


export default App;