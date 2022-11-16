import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom"

// Main - www.hojun.com
// ProductDetails - www.hojun.com/product/1
// Cart - www.hojun.com/cart
// Buy - www.hojun.com/buy

function Index(){
  return <h2>Index 페이지</h2>
}

function ProductDetails(){
  // const location = useLocation();
  // const path = location.pathname.split('/')[2]
  const { id } = useParams() 
  //product/:id 여서 id를 쓴 것. 만약 /product/:test면 test로 구조분해할당을 해야함. 
  //useParams는 마지막 파라미터에 대한 정보를 키:값 형태의 객체로 반환함 
  const value = useParams() 
  
  console.log(value) 
  //http://localhost:3000/product/1일 경우 {id: '1'}를 반환함.

  // console.log(location)
  // console.log(location.pathname.split('/'))
  
  return <h2>ProductDetails {id} 페이지</h2>
}

function Cart(){
  return <h2>Cart 페이지</h2>
}

function Buy(){
  return <h2>Buy 페이지</h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        {/* http://localhost:3000/product/1 이라면, id의 값이 1이 되는 것. 
          useParams는 URL 인자들의 key: value(키/값) 짝들의 객체를 반환하는데
          위의 경우 useParams에서 key는 id가 되고, value는 1이 됨. 따라서, useParams를 호출하면 id: 1이 반환됨.
          :뒤의 값은 자유롭게 정해도 됨.
        */}
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


