import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

// 문제
// /
// /a
// /b
// /c
// /c/1
// /c/2
// /c/d


function Home() {
  return <div>홈</div>
}

function A() {
  return <div>A</div>
}

function B() {
  return <div>B</div>
}

function C() {
  return <div>C</div>
}

function CDetail() {
  return <div>디테일C</div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/a" element={<A/>}/>
        <Route path="/b" element={<B/>}/>
        <Route path="/c" element={<C/>}/>
        <Route path="/c/:id" element={<CDetail/>}/>
        {/* <Route path="/c/*" element={<Outlet/>}>
          <Route path="" element={<C/>}/>
          <Route path=":id" element={<CDetail/>}/>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;

