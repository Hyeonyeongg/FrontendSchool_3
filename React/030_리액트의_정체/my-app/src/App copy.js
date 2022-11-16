function One(props) {
  console.log('// one 시작')
  console.log(props) //children 키를 가진 props 오브젝트가 출력됨. children의 값에는 One컴포넌트의 자식들이 들어있음. 각각의 자식은 객체로 이루어져있고, 그 객체를 담고 있는 배열을 children의 값으로 가지고 있음.
  console.log(props.children[0]) //0번째 오브젝트가 출력됨. 
  console.log('// one 끝')
  return (
    <div>
      {props.children}
      {/* props의 children은 array. 중괄호 안에 array를 넣게되면 []와 ,가 사라지고 요소만 남게됨. */}
    </div>
  )
}

function Two(props) {
  console.log('// two 시작')
  console.log(props) //children의 값으로 p태그 객체 하나가 들어있음. 자식이 하나면 객체로 들어가고, 두 개부터는 배열로 감싸짐.
  console.log('// two 끝')
  return (
    <div>
      {props.children}
    </div>
  )
}

function Three(props) {
  console.log('// three 시작')
  console.log(props) //빈 오브젝트가 출력됨. props로 전달한 것이 없음.
  console.log('// three 끝')
  return (
    <div>hello</div>
  )
}


function Four(props) {
  console.log('// Four 시작')
  console.log(props) //빈 오브젝트가 출력됨. prop로 전달한 것이 없음.
  console.log('// Four 끝')
  return (
    <div>hello</div>
  )
}

function Five() {
  return (
  <div>
    <p>hello</p>
    <Six/>
    {/* (참고) 콘솔에서 Five를 확인해보면 Six는 Five안 에 없음?! 최종적으로 리턴되는값으로 오브젝트를 만들어준다. 렌더링하기전에 리턴된값을 받아서 거기서 오브젝트를 만들어준다. */}
  </div>
  )
}

function Six() {
  return <div>hello</div>
}


function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        {/* One 안에 있는 태그, 컴포넌트들은 렌더링 되지 않음. 안에 있는 요소들은 One의 props에 전달되어, props.children으로 접근할 수 있음. One컴포넌트 내부에서 props.children으로 렌더링을 해줘야만 나타남.  */}
        <h2>app &gt; One - h2</h2>
        <p>app &gt; One- p</p>
        <Two>
          <p>app &gt; One- &gt; Two - p</p>
        </Two>
        <Three/>
        <Four></Four>
        <Five/>
        {/* 안에 적어줄 요소가 없다면 위와 같이 적어주면 됨. 이때는 props에 children이 존재하지 않음. */}
      </One>
    </div>
  );
}
export default App;

//정리 

//돔은 실제 렌더링 된 것, 돔 API는 요소를 개별적으로 컨트롤할 수 있게 해주는 것. 버츄얼 돔은 경량화된 오브젝트 자체. 돔트리에 있는 것들을 경량화된 오브젝트로 렌더링한 것. 요소들을 오브젝트로 내려줌.

//리액트는 연산을 하여 Root를 하나 잡아서 Root에 오브젝트 형태로 쭉쭉 이어져나가는 것을 뿌려준다. 실제 돔에서 렌더링이 되어서 뿌려지는 것이 아니다. 예를들어, hello가 hello1으로 바뀌었다면 일반적인 돔은 전체적으로 렌더링을하지만 리액트는 키 값을 가지고 있을 경우 hello하나만 꼈다 뺐다 할 수 있다.

//리액트는 요소들을 경량화된 오브젝트(=버츄얼 돔)로 렌더링한다. 리액트는 경량화된 오브젝트를 활용한다. (돔api를 통해 돔 요소 하나를 콘솔에 출력해보면 굉장히 많은 내용이 담겨있는데 이를 경량화하여 활용하는 것.)
//요소의 상태가 바뀌었을 때 전체를 렌더링 하지 않고 // 변경이 일어난 요소들만 렌더링 할 수 있다는 특징이 있다


