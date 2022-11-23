function Test({one}){
    return <div>{one}</div>
}
  
function App() {
  const test = {one: 'hello'}
  return (
    <div>
      {/* 아래 두개는 동일 */}
      <Test test={test} />
      <Test {...test} />
    </div>
  );
}
export default App;