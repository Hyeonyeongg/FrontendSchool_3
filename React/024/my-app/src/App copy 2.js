import { useState } from 'react';

function Resume({ 이름, 취미, 자기소개 }) {
  const [like, setLike] = useState(0);
  // const [like, setLike] = useState(100);
  // const [like, setLike] = useState('hello world');
  //useState는 리액트에서 가지고 있는애. 감시해서 변경되면 다시 렌더링하겠다. like는 초기변수, 이 변수에 대한 초기값은 useState()안의 인자로 들어감. setLike는 like를 변경시켜줄 수 있는 함수.

  //함수 앞에 handle이라고 붙이는 것은 관습.
  function handleClickLike() {
    // like += 1;
    setLike(like + 1); //like값이 자동으로 1씩 증가함. like = like +1이 괄호안에 들어간다고 생각.
    // setLike(like + 2); //like = like +2
    // setLike(like + 'hello' + 'world'); //like = like + 'hello' + 'world'
    console.log(like);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      <button onClick={handleClickLike}>{like}</button>
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
