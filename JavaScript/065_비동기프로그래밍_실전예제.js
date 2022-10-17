fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=>console.log(data))

// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)
// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)
// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.
// 4. error 처리를 해주세요.

fetch('http://test.api.weniv.co.kr/mall')
    .then(productData=>productData.json())
    .then(productData=>productData)
    .then(productData => {
        console.log(productData.map(item => item.productName)); //추출은 for보다 map을 사용하기
        return productData;
    })
    .then(productData => {
        console.log(
                productData
                    .map(item => item.price)
                    .filter(item => item >= 10000)
            )
        return productData;
    })
    .then(productData => {
        const main = document.createElement("main"); //보통 이렇게 담을 수 있는 골격을 만들어줌.
        productData.forEach(item => {
            const ProductCard = document.createElement("article");
            const productName = document.createElement("h2");
            const productPrice = document.createElement("p");

            productName.textContent = `상품명 : ${item.productName}`;
            productPrice.textContent = `가격 : ${item.price}`;

            ProductCard.appendChild(productName);
            ProductCard.appendChild(productPrice);

            main.appendChild(ProductCard);
        })
        document.body.appendChild(main);
    })
    .catch(error => {
        alert('에러!')
        // error page로 리다이렉트. 리다이렉트란 다른 페이지로 넘어갈 수 있도록 만드는 것. 에러페이지를 하나 만들어서 그 페이즈로 이동할 수 있도록 만들어줘야 함.
        console.log(error);
    })


//나의 답
fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=> {
        console.log(data);
        return data;
    }).then(data => {
        for (const data_name of data) {
            console.log(data_name["productName"]);
        }
        console.log('---------')
        return data;
    }).then(data => {
        for (const data_price of data) {
            if(data_price["price"] >= 10000){
                console.log(data_price["productName"]);
            }
        }
        return data;
    }).then(data => {
        for (const data2 of data) {
            const name = document.createElement("h2");
            const price = document.createElement("p");
            name.textContent = data2["productName"];
            price.textContent = data2["price"];
            document.body.appendChild(name);
            document.body.appendChild(price);
        }
    }).catch(data => {
        alert('에러가 발생하여 조치중이오니 잠시만 기다려주세요.')
        console.log(data)
    })

// 5. 혹시 시간이 남으신 분들은 해당 코드를 뒤에서 배울 async, await으로 고쳐보세요! (함수형태로 비동기 프로그래밍을 해줄 수 있도록 하는것이 async awiat). await은 기다려주겠다는 것. 비동기 프로그래밍을 동기적으로 실행할 수 있도록 해줌. 
async function getData(){
    const response = await fetch(`http://test.api.weniv.co.kr/mall`); //fetch를 기다려서 값을 받음.
    const productData = await(response.json());
    console.log(productData);
    console.log(productData.map((item) => item.productName));
    console.log(productData.map((item) => item.price).filter((item) => item > 10000));
    
    const main = document.createElement("main");
    productData.forEach(item => {
        const ProductCard = document.createElement("article");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");
    
        productName.textContent = `상품명 : ${item.productName}`;
        productPrice.textContent = `가격 : ${item.price}`;
    
        ProductCard.appendChild(productName);
        ProductCard.appendChild(productPrice);
    
        main.appendChild(ProductCard);
    })
    document.body.appendChild(main);
}
    
getData() //함수형태를 볼 수 있음. 