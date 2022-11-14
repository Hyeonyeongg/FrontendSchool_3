import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';

// 1. Components 폴더와 pages 폴더를 나눠봤습니다. 실무에서 이렇게 폴더와 파일 트리를 잡는다 정도 캐치
// 2. 사용되지 않는 props가 컴포넌트들을 통과하고 있습니다. 2개가 아니라 수십개가 될 경우 사용하지도 않는 props를 계속해서 전달하기 때문에 문제가 됩니다. 이를, props drilling이라고 함. props drilling을 피하기위해 hooks을 활용할 예정

function App() {
  const user = {
    login: false,
    id: 'licat',
    email: 'paul-lab@naver.com',
    img: 'https://paullab.co.kr/images/ceo.png',
  };
  return (
    <main>
      {user.login ? (
        <Homepage id={user.id} email={user.email} img={user.img} />
      ) : (
        <Login />
      )}
    </main>
  );
}

export default App;
