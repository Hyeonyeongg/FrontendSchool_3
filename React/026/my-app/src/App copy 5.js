import styled, {css} from 'styled-components'

//CSS확장이 가능함 (이는 컴포넌트로는 사용할 수 없고, 단순히 styled 컴포넌트에 css를 확장하기 위한 용도로만 사용됨. <One>100</One>불가)
const One = css`
    color: red;
`

const Two = css`
    font-size: 32px;
`

const Three = styled.div`
    ${One}
    ${Two}
`

//(번외)BorderCircle처럼 네이밍을 잘해줘야함. 
const BorderCircle = css`
    border: 1px solid black;
    border-radius: 50%;
`

function App(){
    return (
        <>
            <Three>10</Three>
        </>
    )
}

export default App;