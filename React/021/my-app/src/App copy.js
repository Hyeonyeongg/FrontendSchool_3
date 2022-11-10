import './app.css';
import { One } from './components/One.js'
import { Two } from './components/Two.js'
//디폴트로 인식해서 오류가 발생했다.
//디폴트가 여러개(One.js에서도 디폴트, Two.js도 디폴트)인 경우는 이렇게 {}로 import해주기. yellow가 그린을 덮어씌움. 캐스캐이딩. 우리가 원하는 것은 컴포넌트가 독립적인 것. 캐스캐이딩이 되어서 우리가 원하는 형태로 나오지않는 이슈가 있음. 그래서 네이밍 컨벤션이나 css기법들이 있음.

function App() {
  const style = {backgroundColor:"black", color:"white"}
  return (
    <div>
      <div style={{backgroundColor:"black", color:"white"}}>hello world1</div>
      <div style={style}>hello world2</div>
      {/* error. 스타일은 오브젝트 형태로 줘야함. */}
      {/* <div style="color:red">hello world3</div> */}
      <One/>
      <Two/>
      {/* <h2>hello</h2> */}
      {/* <h2>
      hello
      </h2> */}
      
      <h2 className="hi">hello</h2>
      <h2 className="hello">hello</h2> {/* class를 작성할 때는 className으로 작성해야 함. className이지만 class로 렌더링됨. */}
      
      {/* <h2 class="hi">hello</h2>
      <h2 class="hello">hello</h2> */}
      

    </div>
  );
}

export default App;