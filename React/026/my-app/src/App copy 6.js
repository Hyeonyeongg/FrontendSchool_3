import React from "react";
import styled, { css } from 'styled-components'

//css`` 방식과 비교해보기 
const OneButton = styled.button`
  color: red;
`;

const TwoButton = styled(OneButton)` //styled 컴포넌트도 확장해서 사용할 수 있음. styled.button, color:red를 가진채로 폰트사이즈 30을 넣을 수 있음. (스타일) 컴포넌트끼리 컴포넌트에 있는 값을 가져오고 싶을 때 이렇게 사용한다.
  font-size: 30px;
`;

const App = () => {
	return (
    <div>
        <OneButton>hello world</OneButton>
        <TwoButton>hello world</TwoButton>
    </div>
	);
};
  
export default App;