import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/products/:id/notice" element={<ProdutDetailNotice/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/users/*" element={<Outlet/>}>
          <Route path="" element={<User/>}/>
          <Route path="coupon" element={<Coupon/>}/>
          <Route path="question" element={<Question/>}/>
          <Route path="notice" element={<Notice/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>홈</div>
}

function ProductDetail() {
  return <div>상품디테일페이지</div>
}

function ProdutDetailNotice() {
  return <div>삼품디테일주의페이지</div>
}

function Cart() {
  return <div>카트</div>
}

function User() {
  return <div>유저페이지</div>
}

function Coupon() {
  return <div>쿠폰페이지</div>
}

function Question() {
  return <div>질의응답</div>
}

function Notice() {
  return <div>공지</div>
}

export default App;

