function One() {
  return <h1>hello world</h1>
}
export default function App() {
  return (
    <div>
      hello
      {console.log(<One/>)}
      {/* 오브젝트가 출력됨. 사용자가 정의한 컴포넌트도 하나의 오브젝트! 일반 태그도 오브젝트! 리액트에서는 모든 것이 경량화된 오브젝트로 렌더링된다! */}  
      {/* 각각을 콘솔에 출력해보면 <h2>의 type은  h2, <p>의 type은 p, <One/>의 type은 One으로 출력됨! 마찬가지로, 태그에 적힌 속성이나 태그 안에 작성된 자식들은 props에 전달됨!*/}
    </div>
  )
}
