//기본 골격
/*
async function request() {
const response = await fetch('url 기입',
{
    method: "GET", //POST, DELETE, PUT
    headers: {
        "Content-type": "콘텐츠 형태",
        //application/json, text/plain 등
    },
    body: JSON.stringify(
        서버에 전달할 데이터
    );
});
const data = await response.json();
console.log(data);
}
request();
*/

// function -> await 비동기 : 안됩니다.
// async function -> await 비동기 : 됩니다.
// 예외적으로 await이 밖에 감싸여진 함수 없이 사용될 수 있는 것을 top-level-await 이라고 하고, 이건 작동합니다. (생긴지 얼마 안돼서 언급하는 책이 거의 없을겁니다.)

//아래의 데이터를 받아와서 출력해본다고 가정하자.
fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())

//이렇게하면 안됨. await을 쓰지 않으면 console.log가 먼저 작동하기 때문에, 현재 fetch가 실행중이므로 userData에 pending값이 들어감. 
const userData = fetch('https://jsonplaceholder.typicode.com/users/3')
.then(response => response.json())
console.log(userData);

//따라서, await을 붙여줘야 함. (top-level-await).
const userData = await fetch('https://jsonplaceholder.typicode.com/users/3')
.then(response => response.json())
console.log(userData);


//이미지 받아오는 예제(추후 학습 예정)
async function printImg(){
    const response = await fetch(`https://picsum.photos/200`);
    const blobImg= await(response.blob());
    
    //blob을 담을 img 태그를 만든다.
    const img = document.createElement('img');
    //html body에 위에서 만든 img 태그를 삽입한다.
    document.body.append(img);
    //img 태그의 주소를 설정한다.
    img.src = URL.createObjectURL(blobImg);
}
printImg()

// fetch를 통해 데이터를 쓰고, 수정하고, 삭제하는것이 가능하다.
//get 요청 (서버에서 데이터를 가져올 때 사용)
async function get() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: "GET",
    });
    const data = await response.json(); //여기에 await이 없다면 57번째줄에서 response에 프로미스가 반환되니까 response가 아마 백그라운드로 빠져서 아래에 있는 cosnole.log(data)가 먼저 실행이 되는 것 같음.
    console.log(data);
}
get();

// post 생성 (데이터 생성을 요청할 때 사용) post를 날리면 해당되는 부분에 각각의 데이터가 들어감. 기존 데이터가 100개였다면 101번째로 새로운 값이 들어간다. (다시 get을 해보면 101개 나와야 정상이지만 무료서비스는 실제 post를 허락하지는 않아서 그대로 100개가 나옴.)
// JSON.stringify() 메서드는 배열이나 객체를 JSON 포맷의 문자열로 변환해준다. 
async function post() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
    method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
          body: JSON.stringify({ //문자열로 변환하지 않으면 에러발생
            "title": "오늘의 간식",
            "body": "고소미",
            "userId": 3
        })
    }
    );
    const data = await response.json();
    console.log(data);
}
post();


// delete 삭제
async function delete() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/3',
    { method: "DELETE"}
    );
    const data = await response.json();
    console.log(data);
}
delete();


//put 수정
async function put() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
    {
    method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            "title" : "오늘의 간식",
            "body" : "마카다미아 쿠키",//업데이트할 내용
            "userId" : 1 //1번 user
        })
    }
    );
    const data = await response.json();
    console.log(data);
}
put();


// 실행 컨텍스트 관련 내용
//스코프 체인이란 아래코드와 같이 함수 스코프 안({return a + b + z})에서 변수가 없었을 때 마치 체인이 되어서 위로 올라가는 것처럼 위로 올라가면서 해당되는 변수를 찾는것. 
//즉, 렉시컬 환경에서 z에 대한 컨텍스트 내부의 식별자 정보가 없어서 외부 scope의 주소를 참조해서 z에 대한 값을 가져오는것. lexical환경에는 외부 Scope의 주소 참조와 컨텍스트 내부의 식별자 정보가 들어있음. 
const z = 100
function sum(a, b){return a + b + z}

console.dir(sum)
console.log(sum(10, 20))