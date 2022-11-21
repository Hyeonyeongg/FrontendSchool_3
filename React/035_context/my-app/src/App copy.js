// const App = () => {
//   return (
//     <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//   );
// };

// const HelloLicat = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h2>{props.value.id}</h2>
//       <strong>{props.value.name}</strong>
//       <HelloLicatTwo value={{name:props.value.name, id: props.value.id}}/>
//     </div>
//   );
// };

// const HelloLicatTwo = (props) => {
//   return (
//     <div>
//       <h2>Two : {props.value.id}</h2>
//       <strong>Two : {props.value.name}</strong>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
  );
};

//value를 한번더 구조분해 할당하는 것은 안됨. {{name, id}} 아래와 같은 방법은 가능. 
//name이라는 변수와 id라는 변수에 각각 값을 구조분해 할당함.
const HelloLicat = ({value:{name, id}}) => {
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo value={{name, id}}/>
    </div>
  );
};

const HelloLicatTwo = ({value:{name, id}}) => {
  return (
    <div>
      <h2>Two : {id}</h2>
      <strong>Two : {name}</strong>
    </div>
  );
};

export default App;