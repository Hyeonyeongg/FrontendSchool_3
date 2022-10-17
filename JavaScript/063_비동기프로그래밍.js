// 동기 - 순차적
// 호준: 로봇 청소기 돌리고(10시)
// 호준: 빨래하고(11시)
// 호준: 설거지하고(12시)
// 호준: 요리한다(1시)

// 비동기 - 비순차적
// 호준: 로봇 청소기 돌리면서(10시)
// 호준: 빨래도 돌리고(10시)
// 호준: 설거지하고(10시)
// 호준: 요리하려고 물도 끓이고(10시)
// 비동기식 처리 코드

// 아래 코드는 왜 그럴까요?
const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
},1000); //1, 3, 2가 출력됨. 만약 시간이 1000이 아니라 0이라도 그대로 1, 3, 2가 출력됨. 이는, 호출 스택이 비어있어야면 태스크큐에서 작업을 가져오기 때문에 순차적으로 실행되는 것이 아니라 api를 사용해서 호출했었던 애들은 나중에 불러와서 실행함.
console.log(three);

// 싱글쓰레드: 일할 수 있는 녀석이 1명 -> JS
// 멀티쓰레드: 일할 수 있는 녀석이 여러명 -> 다른 언어 대부분이 지원함.

// 우리가 이런 비동기 프로그래밍을 왜 알아아햐고, javascript의 실행 구조는 왜 알아야 하는가?
// 만약, 동기였다면 two()에서 일부 데이터가 읽혀 오지 않는 사고가 발생하면 두번째 것을 실행시키는 동안 세번째 것을 실행시킬 수 없음. two()값을 다 받아와야만 뿌려줄 수 있음.
// one, four은 독자적으로 실행하고, two,three는 비동기로 한다면 그럼 페이지가 굉장히 빠르게 로드되는 것처럼 보일 수 있음. 혹은 four에서 two의 디폴트 이미지를 읽어올 수도 있음. 그러면 two()를 뿌려주니까 굉장히 빠르게 실행되는 것처럼 볼 수 있음. 
//이런 것때문에 비동기 프로그래밍이 필요함. 
one() // 페이지 로드하고
two() // 서버에서 이미지와 상세 데이터를 받아오고 - 1분
three() // 읽어온 데이터를 뿌려준다.
four() // 페이지에 정적 데이터 로드