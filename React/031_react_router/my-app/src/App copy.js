// npx create-react-app my-app --template basic-react
// cd my-app
// npm install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        {/* 모두 한 페이지에서 작동. url은 달라지지만 모두 한페이지에서 작동함.  url에따라 보여주는 컴포넌트가 다른것.*/}
        {/* www.hojun.com/ 으로 들어오면 해당컴포넌트로 연결 */}
        <Route path="/" element={<Index />}/>
        {/* www.hojun.com/one */}
        <Route path="/one" element={<One name='licat'/>}/>
        {/* www.hojun.com/two */}
        <Route path="/two" element={<Two />}/>
        {/* www.hojun.com/three */}
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(props){
  console.log(props);
  return <h1>{props.name} hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;