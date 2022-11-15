import One from './components/One/One'
import Two from './components/Two/Two'
// import './app.css'
// import './app.module.css'
import styles from './app.module.css'
// module은 styles로 가져와야함. 독립적으로 css를 적용시키고 싶다면 module css를 사용하면 된다.
// module.css를 사용하면 class명에 고유값을 추가해주어서 겹치지 않도록 합니다. 
//className='contents'대신 style.contents에 적혀있는 고유의 값을 클래스명으로 사용함. css파일에 모두 .contents라고 정의해두어도 contents라는 클래스명 대신에 모듈이 만들어준 고유의 값을 클래스명으로 사용하기 때문에 겹치지 않음.

function App() {
  return (
    <>
      <h1>hello world</h1>
      <p className={styles.contents}>hello world</p>
      <One/>
      <Two/>
    </>
  );
}

export default App;