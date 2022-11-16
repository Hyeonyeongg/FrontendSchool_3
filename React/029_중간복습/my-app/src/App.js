import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import shoppingCart from './assets/icon-shopping-cart-white.svg'
import like from './assets/icon-heart.svg'
// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

const GlobalStyle = createGlobalStyle`
  /* reset코드 + 커스텀reset코드 + 유틸리티코드 */
  /* 한 줄 말줄임, 두 줄 말줄임... */
  ${reset}
  
  span {
    color: red;
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`

const ContainerMain = styled.main`
  display:flex;
  justify-content: center;
  margin-top: 160px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`

const ProductName = styled.strong`
  font-size: 18px;
`

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 24px;
`

const IconShoppingCart = styled.a`
  background: #6327FE url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: sticky;
  top: 60px;
`
const BtnLike = styled.span`
  width: 22px;
  height: 22px;
  border: none;
  background: url(${like}) no-repeat center / contain;
`

const ContainerSpaceBetween = styled.div`
  display:flex;
  justify-content: space-between;
`

// 과제입니다.
// .like-btn.on {
//   background: url(../assets/icon-heart-on.svg) no-repeat center / contain;
// }

async function requests(){ //컴포넌트 아니고 일반 함수임. 리액트에서는 fetch보다는 axios를 더 많이 사용.
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json()
  return data
}

function ProductList(){
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  if (dataLoadSwitch){ //처음 렌더링 되었을 때는 true이므로 조건문을 통과함.
    requests().then(productData => {
      setProductListData(productData) //여기서 다시 랜더링이 일어나지만 
      setDataLoadSwitch(false) //dataLoadSwtich의 값이 false로 바뀌었기 때문에 해당 if문은 딱 한번만 실행되고 또 보지 않음.
    })
  }

  // 무한반복
  // requests().then(productData => setProductListData(productData))
  //만약, 위와 같이 작성할 경우, requests의 요청이 성공하여 데이터가 들어오면 setProductListData 함수가 호출되어 state 변수 (ProductListData)의 값이 변경되었으므로 다시 렌더링이 됨. 그럼 다시 ProductList가 호출되어 또다시 requestt를 요청하게 되고 무한 반복이 일어나게 됨. 
  // console.log(productListData)
  
  // const productListData = requests() //requests는 프로미스를 반환함. 
  // console.log(productListData) // 프로미스가 출력됨. 
  
  return (
    <ContainerProductList>
      {productListData.map(item => 
        <ProductListItem 
          key={item.id} //보통, 컴포넌트 리스트를 생성할 때 key를 줌. key는 설정되었다는 것만 확인하면 되지, props로 굳이 넘겨줄 필요는 없음. 각각 순회를 돌면서 생성된 컴포넌트들이 리스트를 생성할 때 지정해준 별도의 키를 가지게 됨.
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      )}
    </ContainerProductList>
  )
}

function ProductListItem({productName, price, thumbnailImg}){
  return (
    <ItemProductList>
      <ImgProduct 
        src={"http://test.api.weniv.co.kr/" + thumbnailImg} 
        alt={productName}
      />
      <ContainerSpaceBetween>
        <ProductName>{productName}</ProductName>
        <BtnLike></BtnLike>
      </ContainerSpaceBetween>
      <ProductPrice>{price}</ProductPrice>
    </ItemProductList>
  )
}

function ShoppingCart(){
  return <IconShoppingCart href="#"></IconShoppingCart>
}

function App() {
  return (
    <ContainerMain>
      <GlobalStyle/>
      <ProductList/>
      <ShoppingCart/>
    </ContainerMain>
  );
}
export default App;

