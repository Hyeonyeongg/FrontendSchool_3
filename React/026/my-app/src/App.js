import React from "react";
import styled, { css } from 'styled-components'

const OneButton = styled.button`
    color: red;
`;

const TwoButton = styled(OneButton)`
    font-size: 30px; //color:red도 가지고있음.
`;

//일반 컴포넌트를 확장하여 꾸며주기 위해서는 className={props.className}를 작성해야 합니다. 
//아래 코드 중 className을 빼면 ThreeButton components의 style이 작동하지 않습니다.
//뭔가 styled 컴포넌트는 자동으로 알아서 class가 부여되어 확장을 하게되면 기존 스타일드 컴포넌트가 가지고 있는 class에 확장한 style(class)를 추가해주는 느낌인데 일반 컴포넌트는 자동으로 class가 부여되지 않아서 애초에 class가 없기 때문에 기존의 class에 확장을 할 수 없어서 확장을 위해 억지로 부여해주는 느낌인 듯? 
const Hello = (props) => {
    return <button className={props.className}>hello world</button>
}

const ThreeButton = styled(Hello)`
    font-size: 30px;
`;


const App = () => {
    return (
    <div>
        <OneButton>hello world1</OneButton>
        <TwoButton>hello world2</TwoButton>
        <Hello/>
        <ThreeButton/>
    </div>
    );
};

export default App;


