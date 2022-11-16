import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import shoppingCart from './assets/icon-shopping-cart-white.svg'
import heart from './assets/icon-heart.svg'
import heartOn from './assets/icon-heart-on.svg'
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
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;

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

const IconShoppingCart = styled.a`
  background: #000 url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: sticky;
  top: 60px;
`

const TitleProduct = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
`;

const HeartProduct = styled.span`
  background: url(${heart}) no-repeat center / contain;
  position: absolute;
  top: 390px;
  right: 0px;
  width: 18px;
  height: 18px;
`;

const PriceProduct = styled.p`
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
`;

async function requests() { //컴포넌트 아니고 일반 함수임. 리액트에서는 fetch보다는 axios를 더 많이 사용.
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json();
  return data;
}



function ProductList(){  
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  //다시 랜더링되면 dataLoadSwtich가 false니까 뒤로 넘어감. 딱 한번만 실행되고 if문을 또 보지 않음.
  if (dataLoadSwitch) {
    requests().then(productData => {
      setProductListData(productData)
      setDataLoadSwitch(false)
    })
  }    
    


  //무한반복
  //requests().then(productData => setProductListData(productData)) //그냥 then으로 데이터넘겨주면 안돼? 왜냐면 일반변수는 렌더링을 다시 하지 않음. 이렇게사용하면 렌더링을 다시함. requets의 요청이 성공하면 함수가 호출되니까 다시 렌더링 됨. 무한반복이 일어남. setProductListData를 호출하면 productData를 하면 함수를 재랜더링. 그럼 ProductList를 또 호출하니까 다시 데이터받고 또 호출해서 반복.
  //console.log(productListData); 


  //const productListData = requests(); //requests는 프로미스를 반환함. 
  //console.log(productListData)
  return (
    <ContainerProductList>
      {productListData.map(item => 
        <ProductListItem  
          key={item.id}
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
      <TitleProduct>{productName}</TitleProduct>
      <HeartProduct></HeartProduct>
      <PriceProduct>{price}</PriceProduct>
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