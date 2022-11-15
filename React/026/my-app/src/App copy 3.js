import styled from 'styled-components'

//one은 스타일 컴포넌트. 컴포넌트니까 당연히 props를 받을 수 있음.
const One = styled.div`
  color: red;
`
const Two = styled.div`
  color: green;
  font-size: ${(props) => props.size+"px"}; //이게 어떻게 가능? styled의 div가 메서드이기 때문에 가능. styled.div라는 메서드를 Two라는 이름으로 쓸 수 있는 것. 즉, fucntion으로 선언한 컴포넌트랑 다르지 않다는 것.
`

// function Two(props) {
//   return 
// }

// const Two = styled.div`
//     color: green;
//     font-size: ${({size}) => size + 'px'};
// `

// 준근님 코드
// const DivRed = styled.div`
//   color: red;
//   font-size: ${({ size }) => size + "px"};
//   border: ${({ border }) => border.join(" ")};
// `;

// export default function App() {
//   return (
//     <div>
//       <DivRed border={["1px", "solid", "blue"]} size={32}>
//         안녕
//       </DivRed>
//     </div>
//   );
// }
// 준근님 코드 끝

const Three = styled.div`
  color: ${(옵션) => 옵션.option ==='하나' ? 'red' : 'pink' };//props대신 옵션을 쓴것.
`


const Four = styled.div`
  color: red;
  ${({border}) => border}
`

function App(){
  return (
      <>
          <One>hello</One>
          <Two size={32}>world</Two>
          <Three option={'하나'}>hello</Three>
          <Four border='border: 1px solid black'>hello</Four>
      </>
  )
}


export default App;