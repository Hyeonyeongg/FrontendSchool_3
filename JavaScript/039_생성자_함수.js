let book = {
    책이름: 'JavaScript',
    책가격: 1000,
    저자: '홍길동',
    출판일: '22.10.11'
}

let newBook={}
//예를 들어,book에 대한 데이터베이스를 만들고 싶음. form에서 아래와 같이 입력을 받았다고 가정.
newBook['책이름'] = 'JavaScript'
newBook['책가격'] = 1000000
newBook['책저자'] = '세원, 석규, 슬기'
newBook['출판일'] = '22.10.30'
//newBook에 데이터가 들어감. form에서 새로운 데이터를 입력받을 때마다 이렇게 수행해야함. 깔끔하지 못함. 이것을 효율적으로 할 수 있는 방법이 생성자 함수!

//첫글자를 대문자로 작성해야함.
function Book(책이름, 책가격, 저자, 출판일){
    this.책이름 = 책이름; //this는 function 자기 자신을 가리킴. this옆에 있는 책이름과, 우변에 있는 책이름,파라미터 책이름(이 둘은 같음)은 다른 것임에 주의.
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
}

let data = Book('CSS', 10, '유진', '22.12.30');
console.log(data); //리턴값이 출력됨. Book에서는 함수에 리턴이 생략되어있기 때문에 undefined가 출력됨.

let book1 = new Book('HTML', 10, '유진', '22.12.30');
console.log(book1); // Book {책이름: 'CSS', 책가격: 10, 저자: '유진', 출판일: '22.12.30'} new 키워드를 붙이면 undefined가 출력되지 않음. 오브젝트 처럼 출력됨. 붕어빵만드는 틀과 비슷.
let book2 = new Book('HTML', 20, '유진', '22.12.30');
let book3 = new Book('JS', 30, '유진', '22.12.30');
console.log(book1, book2, book3);

// 생성자 함수는 객체를 찍어내는 용도로 사용. 코드도 훨씬 깔끔. 메모리적으로도 효율적.  
//new키워드를 사용했을 경우. 내부적으로 이렇게 한 것처럼 작동함.
function Book(책이름, 책가격, 저자, 출판일){
    // this = {}
    this.책이름 = 책이름; 
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
    // return this
}