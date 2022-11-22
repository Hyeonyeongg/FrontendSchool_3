import One from './components/One/One'
import Two from './components/Two/Two'
import Three from './components/Three/Three'
import Four from './components/Four/Four'
import './app.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeRadius1, changeRadius2, changeRadius3 } from './reducer/reducer'

function App() {
  //useSelector를 통해 store에 있는 state를 가져옴.  store의 state가 변경되면 다시 가져옴.
  const { borderRadius } = useSelector(state => ({
    borderRadius: state.borderRadius
  }))

  console.log('// app 컴포넌트 시작')
  console.log(borderRadius)
  console.log('// app 컴포넌트 끝')

  const dispatch = useDispatch()
  const haldleChangeRadius1 = () => dispatch(changeRadius1()) //리듀서(changeRect)한테 전달.
  const haldleChangeRadius2 = () => dispatch(changeRadius2())
  const haldleChangeRadius3 = () => dispatch(changeRadius3())


  return (
    <main>
      <button onClick={haldleChangeRadius1}>사각형</button>
      <button onClick={haldleChangeRadius2}>둥근사각형</button>
      <button onClick={haldleChangeRadius3}>원</button>
      <br />
      <br />
      <br />
      <One borderRadius={borderRadius} />
      <Two borderRadius={borderRadius} />
      <Three borderRadius={borderRadius} />
      {/* 버튼을 누를 때마다 Four도 다시 렌더링됨. */}
      <Four />
    </main>
  );
}

export default App;