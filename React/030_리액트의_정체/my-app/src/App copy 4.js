function App() {
  const Test = <h1>hello 1</h1>
  console.log(Test) // object

  const TestTwo = [<h1 key="one">hello 1</h1>, <p key="two">hello 1</p>];
  console.log(TestTwo);

  console.log(typeof(TestTwo)) //object (배열도 객체이기 때문에 object가 출력됨.)
  console.dir(TestTwo) //Array(2)

  return (
      <div>
          {/* {[<h1>hello 1</h1>]} */}
          {[<h1 key="one">hello 1</h1>, <p key="two">hello 1</p>]}
      </div>
  );
}

export default App;