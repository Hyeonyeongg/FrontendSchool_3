function One() {
  return <h1>hello world</h1>
}

function Two(props) {
  console.log(props); //children: Array(2) (array에 h2(객체)와 p(객체)가 들어있음.)
  return (
    <div>
      {props.children}
    </div>
    
  )
}

export default function App() {
  return (
    <div>
      {/* 오브젝트가 출력됨. */}
      {console.log(<One />)}
      <Two>
        <h2 className="twoclass" key="100">hello world</h2>  
        {/* (참고)props에 className: "twoclass", key, children: "hello world"가 전달됨. */}
        <p>hello world</p>  
      </Two>  
    </div>
  )
}
