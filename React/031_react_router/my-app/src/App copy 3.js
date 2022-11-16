import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
        <Route path="/blog" element={<BlogHome />}/>
        {/* :id를 통해 파라미터를 설정을 함. :은 뒤에 값이 변경될 수 있다는 것을 명시함. :이 없으면 그냥 id그대로. /blog/id가 되버림.*/}
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function BlogHome(){
  return <h1>BlogHome</h1>
}

function Blog(){
  //http://localhost:3000/blog/1 면 Blog로 이동.
  //http://localhost:3000/blog/1?name=hojun 이것도 가능. pathname: "/blog/1" search: "?name=hojun"
  //http://localhost:3000/blog/1?name=hojun&age=10 이것도 가능. pathname: "/blog/1" search: "?name=hojun&age=10"

  const location = useLocation(); //현재 URL 정보(hash, key, pathname, search, state)가 담긴 객체를 반환함.
  console.log(location)  
  console.log(location.pathname) //pathname에는 http://localhost:3000/blog/2 에서 http://localhost:3000이후의 값 /blog/2가 들어감.
  // console.log(location.pathname.slice(-1))
  console.log(location.pathname.split('/')) //) ['', 'blog', '2']
  // const urlSlicingValue = location.pathname.slice(-1)
  const urlSlicingValue = location.pathname.split('/')[2]
  const imgUrl = `http://test.api.weniv.co.kr/asset/img/${urlSlicingValue}/thumbnailImg.jpg`
  return (
    <>
      <h1>hello Blog</h1>
      <img src={imgUrl} alt="" />
    </>
  )
}

export default App;