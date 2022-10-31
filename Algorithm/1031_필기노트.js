//워밍업 문제1
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 문제 링크 : https://codingdojang.com/scode/393

//나의 답
let total = 0;
for (i=1; i<10000; i++) {
    const x = i.toString().split('');
    total = total + x.filter(item => parseInt(item) === 8).length;
}

//함께 풀어본 답
const a = new Array(10000).fill(0).map((_, index) => index + 1).join('').match(/8/g).length;

[...Array(10000)].map((_, index) => index + 1) //fill을 안쓰려면 [...Aray(10)]을 해주면 됨. undefined로 값이 들어가게됨.

let arr = []
for(let i = 1; i <= 10000; i++){
    arr.push(i);
}
let result = [...arr.join('')].filter(el=>el==='8').length
console.log(result)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//워밍업 문제2
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S = [1, 3, 4, 8, 13, 17, 20] 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 문제링크 : https://codingdojang.com/scode/408


//나의 답 (틀렸음)
const S = [1, 3, 4, 8, 13, 17, 20]

let shortest = S[1] - S[0];
let answer = '';

for(i=1; i<S.length ; i++) {
    if(S[i] - S[i-1] < shortest) {
        shortest = S[i] - S[i-1];
        answer = S[i], S[i-1];
    }
}

console.log(answer);


//함께 풀어본 답1
let s = [1, 3, 4, 8, 13, 17, 20]
let arr = []
for(let i=1; i < s.length; i++){
    arr.push(s[i] - s[i-1]); //[2, 1, 4, 5, 4, 3]
}

let index = arr.indexOf(Math.min(...arr))
console.log(s[index], s[index+1]); // index는 1이고, arr에서 1번째 자리에 있는 1은 s[2]-[1]의 결과값. 따라서 index값과 +1을 해준 index값을 출력해주는 것.


//함께 풀어본 답2
let dots = [1, 3, 4, 8, 13, 17, 20];
let 최솟값 = Infinity;
let 최솟값인덱스 = 0;

for (let i = 1; i < dots.length; i++) {
    if (Math.abs(dots[i] - dots[i - 1]) < 최솟값) {
        최솟값 = Math.abs(dots[i] - dots[i - 1]);
        최솟값인덱스 = i;
    }
}

console.log(dots[최솟값인덱스], dots[최솟값인덱스 - 1]); //dots[2]-dots[1]에서 2를 최솟값 인덱스로 넣기 때문에 최솟값인덱스와 최솟값인덱스 -1을 출력해준것.  

//함께 풀어본 답3 - zip이용 (a에 배열의 메서드인 map을 사용했기 때문에 a에는 배열만 넣을 수 있음. a에 'hello' 등 문자열 넣는 것 불가. 하지만, b에 넣는 것은 가능)
const zip = (a, b) => a.map((v, i) => [v, b[i]]);

let s = [1, 3, 4, 8, 13, 17, 20];
// 1 3 4 8 13 17
// 3 4 8 13 17 20
let pairs = zip(s.slice(0, s.length - 1), s.slice(1));

function 비교(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
        return -1;
    }
    if (a[1] - a[0] > b[1] - b[0]) {
        return 1;
    }
    return 0;
}

pairs.sort(비교);
pairs.sort(비교)[0];

//함께 풀어본 답4 - zip이용, sort이용 x
const zip = (a, b) => a.map((v, i) => [v, b[i]]);
let s = [1, 3, 4, 8, 13, 17, 20];

let pairs = zip(s.slice(0, s.length - 1), s.slice(1));
let 최솟값 = Infinity;
let 최솟값쌍 = [];

for ([i, j] of pairs) {
    if (j - i < 최솟값) {
        최솟값 = j - i;
        최솟값쌍 = [i, j];
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//스택 구현하기
class Stack {
    constructor(){
        this.arr = []; // 연결리스트로 구현할 수도 있지만, 지금 배우지 않았기에 배열로 구현합니다.
        this.length = 0;
    }

    push(data){
        this.arr.push(data);
        this.length += 1;
    }

    pop(index){
        if (this.length == 0){
            return
        }
        if (index > this.arr.length - 1){ //배열의 인덱스보다 큰 값이 들어온 경우, 가장 마지막 값을 빼줌.
            this.length -= 1
            return this.arr.pop()
        }
        let result = this.arr.splice(index, 1)
        this.length -= 1
        return result
    }

    empty(){
        if (this.length == 0){
            return 1
        } else {
            return 0
        }
    }

    top(){
        return this.arr[this.length - 1]
    }

    bottom(){
        return this.arr[0]
    }

    display(){
        return this.arr
    }
}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.display()


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//연결리스트 구현하기 (기본1)
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
const list = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: {
                        value: 21,
                        next: null
                    }
                }
            }
        }
    }
}
list.head.next.next.next.value

//연결리스트 구현하기 (기본2)
let list = {
    head: null,
};

let node1 = { value: 46, next: null }; //next에 바로 node2를 넣으면 안됨. node2가 선언되어있지 않은 상태
let node2 = { value: 49, next: null };
let node3 = { value: 97, next: null };
let node4 = { value: 12, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

list.head = node1;



// 연결리스트 구현하기(심화)
class Node {
    constructor(data) {
        this.data = data;
        this.next = null; //만약, 여기에 this.length를 추가하면 생성되는 노드마다 데이터 공간이 할당되기 때문에 메모리가 크게 필요하게 됨. Node에 데이터를 추가하면 O(n)이지만, LinkedList에 데이터를 추가하면 O(1)임. 따라서, Node클래스 안에 데이터 추가는 주의해야함. NodeList는 한 번만 생성하기 때문에 상관없음. 
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init; //맨 처음의 값은 head가 가리키고, 맨 마지막 값은 tail이 가리킴. head와 tail이 있어야 마지막 값을 꺼내거나 할 수 있음. 여기서 init은 노드 자체를 의미함.
        this.tail = init;
        this.length = 0;
        this.displayData = '';
        this.displayDataArr = [];
    }

    length() {
        return this.length;
    }

    // toString() {
    //     return '<' + this.displayData.slice(0, -2) + '>'; //맨 뒤에 ,랑 공백을 제거하기 위해 slice를 해줌.
    // }

    // toArray() { //toString을 다른 방식으로 좀 더 깔끔하게 작성한 것.
    //     return this.displayDataArr;
    // }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드; //맨 처음 append를 했을 때 this.tail은 init임. init의 next에 새로운 노드의 주소값을 넣어서, init과 새로운 노드가 연결됨. 
        // 마지막 노드는 새로운 노드가 됨 
        this.tail = 새로운노드; //맨 처음 append를 했을 때, tail은 init을 가리키고 있음. 왜냐하면 init이 현재 제일 마지막 노드이니까. 하지만, 새로운 노드를 넣는 순간 새로운 노드가 마지막 노드가 되므로 tail에 새로운 노드의 주소값을 줘서 tail이 새로운 노드를 가리키게 해야함. (만약, 이 코드가 주석처리되면 this.tail 은 init노드로 고정이됨. 이것을 해줘야만 마지막노드를 기준으로 다음에 새로 들어오는 노드를 연결시켜줄 수 있는것.)
        this.length += 1;
        this.displayData += `${data}, `;
        this.displayDataArr.push(data);
    }

    toString() {
        let 순회용현재노드 = this.head; //this.head는 항상 init 노드임.
    
        //처음 순회용 현재 노드가 init이기 때문에 next를 한 번 해줌. 만약, 이것을 하지 않는다면 마지막 출력 데이터의 맨 앞에 ;'init'이 포함되어 출력됨.
        순회용현재노드 = 순회용현재노드.next; 
    
        let 출력데이터 = '';
        for (let i = 0; i < this.length; i++) {
            출력데이터 += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }
    
        return 출력데이터;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);