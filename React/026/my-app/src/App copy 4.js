import styled from 'styled-components'

const One = styled.div`
    color: red;
    &::after{
        content:'cm'
    }
`

// SaSS문법 사용가능
// a {
//     /* style 1 */
//     &::after {
//       /* style 2 */
//     }
// }

// 컴파일 후
// a { /* style 1 */ }
// a::after { /* style 2 */ }

// div { color:'red' }
// div::after { content: 'cm' }

function App(){
    return (
        <>
            <One>10</One>
        </>
    )
}

export default App;