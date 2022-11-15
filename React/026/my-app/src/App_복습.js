//오전 복습

// 인덱스로 키를 주는 것은 중복될 수 있다.
// step1 (참고 : 들어가는 키값을 볼 수는 없음. )
// const arr = [10, 20, 30, 40, 50]
// function App() {
//   return (
//     <div>
//       {/* key를 지정하지 않아 에러가 발생합니다. list의 각 자식들은 유니크한 키가 필요합니다. */}
//       {/* {arr.map(v => <p>{v}</p>)} */}

//       {/* 숫자나 문자로 key값을 사용합니다. */}
//       {arr.map(v => <p key={v.toString()}>{v}</p>)}
//       {arr.map(v => <p key={v}>{v}</p>)}
//     </div>
//   );
// }

//step 2
// const value = 2;
// function App() {
//   if(value === 1) {
//     return <h1>hello 1</h1>
//   } else if (value === 2) {
//     return <h1>hello 2</h1>
//   } else if (value === 3) {
//     return <h1>hello 3</h1>
//   } 
// }


// step 3
// npm install styled-components
// npm i styled-reset
// import styled from "styled-components";

// 클래스 이름이 자동으로 부여되므로 클래스 이름을 고민하지않아도된다. 클래스 이름이 다 다르게 나오기때문에 겹칠일이 없어 다른 컴포넌트의 간섭을 염려할 필요가 없다. 
// const DivBlue = styled.div`
//   color: blue;
// `;

// const DivRed = styled.div`
//   color: red;
// `;

// function App(){
//   return (
//     <>
//       <DivBlue>hello</DivBlue>
//       <DivRed>hello</DivRed>
//     </>
//   )
// }

// export default App;
