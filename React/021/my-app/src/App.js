function One(props){
  return (
    <div>
      <p>{props.name}님 안녕하세요!</p>
      <p>당신의 나이는 {props.age * 3}입니다.</p>
    </div>
    
  )
}

function Two({name, age}){
  return (
    <div>
      <p>{name}님 안녕하세요!</p>
      <p>당신의 나이는 {age}입니다.</p>
    </div>
  )
}

function App() {
  return (
    <>
      <p>hello world 1</p>
      <p>hello world 2</p>
      <br/>
      <One name="현영" age={10}/>
      <br/>
      <Two name="현영" age={10}/>
    </>
  );
}

export default App;