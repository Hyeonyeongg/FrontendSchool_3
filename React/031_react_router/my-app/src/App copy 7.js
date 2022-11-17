import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function Login(){
  return <div>login</div>
}

function Study(){
  return <div>study</div>
}

function StudyDetail(props){
  //아무것도 안들어옴. 이전 버전에서는 props로 처리했습니다.
  // console.log(props)
  
  // const Location = useLocation();
  // const path = Location.pathname.split('/')[2]

  const {num} = useParams()

  //예를 든겁니다. 이런식으로 데이터를 가져와서 아래에 데이터르뿌려준다면 blog 형식이 완성되는 것입니다.
  //fetch(`www.test.abc/${num}`)

  return <p>{num}번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {num}번 게시물을 요청하셔야 합니다.</p>
}

// function Test() {
//   const {test} = useParams()
//   const location = useLocation();

//   console.log(location)
//   console.log(test)
//   return <div>hello</div>
// }

function Chat(){
  const location = useLocation();
  const pharams = useParams();
    
  console.log(location);
  console.log(pharams);

  const 채팅방번호 = location.pathname.split('/')[2]
  //강사님 방식(권하진 않음.) 왜냐하면 url의 주소가 깊어졌을 때 www/블라.com/a/b/c/d/e 이렇게 되었을 때 앞에 있는 값이 필요한 경우가 종종 있습니다. 
  return <p>{채팅방번호}번 게시물에 오신것을 환영합니다. 여기는 {채팅방번호}번 게시물의 채팅방입니다. 여러분이 fetch를 통해 백엔드에서 채팅정보를 받아와야 합니다.</p>
}

function Memo(){
  const location = useLocation();
  const {num} = useParams();
    
  console.log(location);
  console.log(num);

  //깔끔한 방식
  return <p>{num}번 게시물에 오신것을 환영합니다. 여기는 {num}번 게시물의 메모방입니다. 여러분이 fetch를 통해 백엔드에서 메모정보를 받아와야 합니다.</p>
}

function Notice(){
  return <div>notice</div>
} 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/study" element={<Study />}/>
        <Route path="/study/:num" element={<StudyDetail />}/>
        {/* <Route path="/study/:num/:test" element={<Test />}/> */}
        
        {/* <Route path="/study/:num/chat" element={<Chat />}/>
        <Route path="/study/:num/memo" element={<Memo />}/> */}
        
        {/* Outlet을 사용하면 위와 같은 구조를 사용할 수 있음. /study/:num/ 이후에 오는 모든 것들을 여기에서 처리하겠다.뒤에 Outlet을 써주면 됨. 상황에 따라 위의 방법이나 아래의 방법을 적절히 사용.*/}
        <Route path="/study/:num/*" element={<Outlet />}>
          <Route path="chat" element={<Chat />}/>
          <Route path="memo" element={<Memo />}/>
        </Route>
        <Route path="/notice" element={<Notice />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;

// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study/6
// https://www.studyin.co.kr/study/6/chat
// https://www.studyin.co.kr/study/6/memo
// https://www.studyin.co.kr/notice
// https://www.studyin.co.kr/notice/recruit
// https://www.studyin.co.kr/notice/business

// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study
// https://www.studyin.co.kr/notice
