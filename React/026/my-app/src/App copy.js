import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset'

//글로벌 스타일 만들기 - 글로벌 스타일은 styled-components가 제공하는 createGlobalStyle() 함수를 사용
//전역 스타일 컴포넌트 생성. GlobaStyle이라는 이름으로 꼭 안해도됨.
//Reset css는 styled-reset이라는 패키지를 다운받은 뒤 styled-reset이 제공하는 reset을 아래와 같이 글로벌 CSS에다가 적용함.
const GlobalStyle = createGlobalStyle`
  ${reset}  
  span {
    color: red;
  }
`

function Two() {
  return (
    <section>
      <h2>hello two</h2>
      <span>hello</span>
    </section>
  )
}

function One() {
  return (
    <section>
      <h2>hello one</h2>
      <span>hello</span>
    </section>
  )
}

function App() {
  console.log('// reset 시작');
  console.log(reset[0]);
  console.log('// reset 끝');
  return (
    <>
      {/*  모든 하위 컴포넌트에 전역 스타일 컴포넌트의 내용이(span이 빨갛게) 적용됨.*/}
      <GlobalStyle/> 
      <h1>hello world</h1>
      <span>hello world</span>
      <One/>
      <Two/>
    </>
  );
}

export default App;