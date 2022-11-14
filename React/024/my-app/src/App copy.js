function Resume({ 이름, 취미, 자기소개 }) {
  let like = 0;

  function clickLike() {
    like += 1;
    console.log(like);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      {/* 여기(button에 작성한 like)가 왜 증가되지 않을까? 변수의 값이 바뀌어도 페이지는 랜더링이 다시 일어나지 않기 때문인데요. 모든 변수가 변할때마다 컴포넌트를 업데이트 한다면 많은 리소스가 낭비될 것입니다. 그래서 특정 변수를 지정하여 그 변수가 변할 때마다 페이지를 업데이트하라는 명령을 내려주어야 합니다. 렌더링이 되게끔 리액트에서 변수를 감시하게 해야함. 감시하다가 변경이되면 다시 렌더링을 시켜주는 작업을 하자. 변수가 변경될때마다 모두 렌더링하는 것이 아니라 내가 원하는 부분만 다시 렌더링해주면 리소스를 아낄 수 있음.  */}
      <button onClick={clickLike}>{like}</button>
    </section>
  );
}

function App() {
  return (
    <main>
      <Resume 이름='혀녕이' 취미='음악듣기' 자기소개='안녕하세요. 혀녕입니다' />
    </main>
  );
}

export default App;
