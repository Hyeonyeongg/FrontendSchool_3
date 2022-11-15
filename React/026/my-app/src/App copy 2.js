import styled from 'styled-components'

//(중요) styled-components를 사용한 스타일 적용
//styled-components로 스타일을 적용할 때는 styled-components에서 제공하는 styled를 사용합니다.

const ContentsDivOne = styled.div`
  color: red;
`

const ContentsDivTwo = styled.div`
  color: green;
`

const ContentsDivThree = styled.div`
  color: blue;
`

const SectionTitle = styled.h2`
  color: dodgerblue;
  font-size: 32px;
`

function App() {
  return (
    <>
      {/* 다 같은 div태그인데 class가 다르게 붙어있는 것을 볼 수 있음. */}
      {/* class 명이 다르기 때문에 해당 컴포넌트 안에서만 스타일이 적용됨. 또한, 이로 인해 캐스캐이딩에 영향을 받지 않음. */}
      {/* 또한, 클래스명을 유추할 수 없기 때문에 안에 있는 hello world라는 텍스트를 특정하기가 힘들다는 장점이 있음. -> 보안 장점 */}
      <SectionTitle>hello</SectionTitle>
      {/* h2태그인데 color은 dogerblue, font-size은 32px의 스타일이 적용된 h2태그가 반환됨 */}
      <ContentsDivOne>hello world</ContentsDivOne>
      <ContentsDivTwo>hello world</ContentsDivTwo>
      <ContentsDivThree>hello world</ContentsDivThree>
    </>
  );
}

export default App;