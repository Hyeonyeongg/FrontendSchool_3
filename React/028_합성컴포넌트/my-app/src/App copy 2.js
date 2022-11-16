import styled from "styled-components";

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

// key도 props에 들어옴. 하지만 propr를 찍었을 때 key의 값은 볼 수 없음. className, value, childrend이 props에 들어옴.
const Card = (props) => {
    console.log('//Card 시작')
    console.log(props)
    console.log('//Card 끝')
  return (
    <CardDiv className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      <div>{props.children}</div>
      {/* children은 정해진 문자 */}
    </CardDiv>
  );
};

const SettingCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};

const ShareCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
        eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
        et praesentium nostrum dolores culpa cupiditate unde doloremque labore
        beatae accusamus.
      </p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};


function App() {
  return (
    <>
      <Card className="setting" value="챌린지 설정">
        {/* SettingCard는 렌더링 되지 않고, Card의 props.child 값으로 전달되어 Card컴포넌트 내부에서 컨트롤하여 쓸 수 있음. {props.child}로 렌더링을 해야만 나타남. */}
        <SettingCard />
      </Card>
      <Card className="share" value="서비스 공유하기">
        <ShareCard />
      </Card>
    </>
  );
}

export default App;