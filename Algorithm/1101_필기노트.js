class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }

    // length() { //this.length가 덮어 씀
    //     return this.length;
    // }

    toString() {
        let 순회용현재노드 = this.head;

        //처음 순회용 현재 노드가 init이기 때문에
        순회용현재노드 = 순회용현재노드.next;

        //이부분 중요!!!!!! 그래야 트리의 순회가 가능함.
        let 출력데이터 = "";
        for (let i = 0; i < this.length; i++) {
            출력데이터 += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }

        //return 출력데이터;
        return '[' + 출력데이터.slice(0, -2) + ']';
    }

    //어레이로 뽑아낼 수 있음. 
    fullData() { //물론, 처음부터 어레이로 저장할 수도 있지만 메모리 낭비가 되기 때문에 이렇게 만들어준것. toString으로 뽑아준것을 json으로 변환해줌.
        return JSON.parse(this.toString());
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
    }

    //순회를 하면서 끼어들어갈 것을 찾기때문에 toString과 비슷함.
    insert(index, data){
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next; //처음 순회용 현재 노드가 init이기 때문에 옆으로 이동

        for (let i = 0; i < index - 1; i++) { //만약, 인덱스 2의 위치에 새로운 노드를 추가하고 싶다면, 바로 이전 노드의 정보를 알아야 함. (순회용현재노드는 0번째 인덱스 노드를 가지고 있음.)
            순회용현재노드 = 순회용현재노드.next;
        }

        let 새로운노드 = new Node(data); 
        새로운노드.next = 순회용현재노드.next; //1번째 노드의 next값. (= 2번째 노드의 주소값을 가짐.)
        순회용현재노드.next = 새로운노드;
        this.length += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);


///////////////////////////////////////////////////////////////////////////////////////////
//Double linked list의 기본 형태
const list = {
    head: null,
}

let list1 = {value: 12, next: null, pre: null} //list1이 노드임.
let list2 = {value: 99, next: null, pre: null}
let list3 = {value: 37, next: null, pre: null}
let list4 = {value: 2, next: null, pre: null}

list.head = list1;
list1.next = list2;
list2.next = list3;
list3.next = list4;

list1.pre = list; 
list2.pre = list1; //해당 노드(list1)를 가리킴. (value를 가리키는 것이 아님)
list3.pre = list2;
list4.pre = list3;

//클래스로 만들어보기
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.pre = null;
    }
}

class DoubleLinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        this.tail.next = 새로운노드;
        새로운노드.pre = this.tail;
        this.tail = 새로운노드;
    }
}

l = new DoubleLinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);

/////////////////////////////////////////////////////////////////////////////////////////////////
//정렬 알고리즘
// 입력값.length는 고정값이 아님! pop을 하면 length가 변함.
//block안에서 pop을 하게되면 length가 변함.

//선택 정렬
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = []
//let 길이 = 입력값.length //가변될 수 있는 값을 미리 변수로 선언하는 방식을 사용할 수 있음. for문 조건식의 종료값에 i < 입력값.length를 해놓고 for문 코드블럭 안에 배열을 pop하는 메서드가 있으면 pop할때마다 입력값.length가 변하게 됨.
while(!!입력값.toString()){ //배열에 값이 존재할 때만 반복문을 돔. '입력값' 자체를 조건식으로 넣을 수는 없음. 왜냐하면 []일 경우 []는 true이기 때문. 따라서. 입력값을 toString으로 바꿔줌으로써 [].toString()은 ''고, ''은 false가 됨. !!작성안해줘도 됨. 
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값), 1) //입렵값에서 현재 빼낸 최솟값을 제거해줘야함.
}
console.log(정렬된배열);

//Math.min안쓰고, 메서드 최소화된 코드. 실습의 목적도 있고, 공간복잡도를 줄일 수 있음. 또한 정렬된 배열을 담을 새로운 배열을 새로 생성하지 않아도 됨.
//최솟값을 찾아서 위치를 바꿔줌.
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = []; 

function selectionSort(arr) {
    // [199, 22, 33, 12, 32, 64, 72, 222, 233]
    // 첫번째 순회
    // min_index = 0
    // 두번째 순회
    // arr[min_index] > arr[j]
    // arr[0] > arr[1] -> min_index = 1
    // arr[1] > arr[2] -> min_index = 1
    // arr[1] > arr[3] -> min_index = 3
    // arr[3] > arr[4] -> min_index = 3
    // arr[3] > arr[5] -> min_index = 3
    // arr[3] > arr[6] -> min_index = 3
    // arr[3] > arr[7] -> min_index = 3
    // arr[0](199) <-> arr[3](12)
    // 순회가 돌면 돌 수록 최솟값이 앞에 배치되게 된다.
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }
        }
        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(selectionSort(입력값));

//////////////////////////////////////////////////////////////////

//삽입정렬 (껴들려면 껴들 수 있는 index를 알아내야 함.)
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

//껴들기를 할 때 어디에 껴들지 찾아야하기 때문에 아래 함수가 필요함. 첫번째부터 자신보다 큰 값을 찾아서 큰 값 바로 앞(사실은 그 큰 값의 자리)에 들어가면 됨. 이미 정렬된배열 안에 삽입해서 들어가니까 정렬된 배열을 인자로 받음.
function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값) {
    for (const i in 정렬된배열){
        if(삽입값 < 정렬된배열[i]) { 
            return i; //내가 삽입할 위치는 나보다 큰 그 아이의 위치!
        } 
    }
    return 정렬된배열.length; //못찾으면 맨 마지막에 넣어주면 됨.
} 

for(let i=0 ; i < 배열의길이 ; i++) {
    let 삽입값 = 입력값.shift(); //삽입정렬에서는 맨첫번째 값을 항상 꺼내야함.
    let 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열, 삽입값);
    정렬된배열.splice(인덱스, 0, 삽입값); //가운데 인자에 0을 넣으면 값을 삭제하지않고 3번째 인자의 값을 넣음.
}

console.log(정렬된배열);

/////////////////////////////////////////////////////////////////////

//병합 정렬 (두개씩 나눔. )
//반으로 나눴을 때 전부다 위치를 바꿔줘야하는 상황이면 Best, 반으로 나눠서 봤는데 전부다 정렬되어 있는 상태면 Best.
//분할
[5, 10, 66, 77, 54, 32, 11, 15]
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]
//정복
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]

let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    //분할
    let 입력배열의길이 = 입력배열.length;
    let 결과값 = []
    if(입력배열의길이 <= 1) { //[], [1] 등은 정렬된 상태니까 바로 반환해줌.
        return 입력배열
    }
    let 중간값 = parseInt(입력배열의길이 / 2) //병합정렬은 항상 중앙헤서 정렬을함. ~~(입력배열의길이/2)와 같다.
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값))
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))

    //return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;

    //정복
    while(그룹하나.length != 0 && 그룹둘.length!= 0){ 
        if(그룹하나[0] < 그룹둘[0]) { //값이 같을 경우도 다 적용됨.
            결과값.push(그룹하나.shift());
        } else {
            결과값.push(그룹둘.shift());
        }
    }

    while(그룹하나.length != 0 ) { //그룹하나의 length가 0이 되는순간 빠져나옴
        결과값.push(그룹하나.shift())
    }

    while(그룹둘.length != 0) {
        결과값.push(그룹둘.shift());
    }
    return 결과값;
}
console.log(병합정렬(입력값));

//개선코드
function 병합정렬(입력배열){
    //분할
    let 입력배열의길이 = 입력배열.length;
    let 결과값 = []
    if(입력배열의길이 <= 1) { //[], [1] 등은 정렬된 상태니까 바로 반환해줌.
        return 입력배열
    }
    let 중간값 = parseInt(입력배열의길이 / 2) //병합정렬은 항상 중앙헤서 정렬을함. ~~(입력배열의길이/2)와 같다
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값))
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))

    //return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;

    //정복
    while(그룹하나.length != 0 && 그룹둘.length!= 0){ 
        if(그룹하나[0] < 그룹둘[0]) { //등호도 다 적용됨.
            결과값.push(그룹하나.shift());
        } else {
            결과값.push(그룹둘.shift());
        }
    }

    결과값 = [...결과값, ...그룹하나]
    결과값 = [...결과값, ...그룹둘]
    return 결과값;

}
console.log(병합정렬(입력값));

//////////////////////////////////////////////////////////////////////////
//퀵정렬
// 원본
[66, 77, 54, 32, 10, 5, 11, 15]

// step 1
// 피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

// step 2
// 피봇값 : 54
[32, 10, 5, 11, 15] + [54] + [66] + [77]

// step 3
// 피봇값 : 32
[10, 5, 11, 15] + [32] + [54] + [66] + [77]

// step 4
// 피봇값 : 10
[5] + [10] + [11, 15] + [32] + [54] + [66] + [77] 

// step 5
// 피봇값 : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77] //이상태에서 합치면 끝


[5, 10, 11, 15, 32, 54, 66, 77]


let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

function 퀵정렬(입력배열) {
    let 입력배열의길이 = 입력배열.length;
    
    if(입력배열의길이 <= 1) { //[], [1] 등은 정렬된 상태니까 바로 반환해줌.
        return 입력배열
    }

    let 피벗값 = 입력배열.shift() //나중에 계산을 쉽게하기 위해 []로 감싸줘도 됨.
    let 그룹하나 = []
    let 그룹둘 = []

    for (let i in 입력배열){
        if(입력배열[i] < 피벗값) {
            그룹하나.push(입력배열[i])
        }else {
            그룹둘.push(입력배열[i])
        }
    }
    console.log(
        `그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n피벗값 : ${피벗값}\n`
    );

    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘)) //[그룹하나 + 피벗값 + 그룹둘]

}


퀵정렬(입력값)

///////////////////////////////////////////프로그래머스 - 비밀지도////////////////////////////////////////
//arr1과 arr2를 묶어줘야한다!! zip을 쓰자!!
function solution(n, arr1, arr2) {
    answer = []
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    for ([i, j] of zip(arr1, arr2)){
        answer.push((i | j).toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' ')); //비트단위 or연산자. 
    }
    return answer;
    //혹은 toString(2)를 하면 2진수로 출력해줌. x.toString(2).replace(/1/g, '#').replace(/0/g, ' '); (주의. replaceALL을 사용할수도 있지만 노드버젼이 낮다면 replaceAll을 사용할 수 없음)
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])

//padStart()는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환함. 채워넣기는 대상 문자열의 시작(좌측)부터 적용됨.
//여기서 padStart가 필요한 이유는? 예를들어, 9와 3을 비트 연산을 할 경우 1011이 나옴. 그런데 이상태로 replace를 하면 '# ##'이 나오게 되는데 한 변의 크기(n)가 5임. 즉, 비트 연산을 할 때 1011에서 맨 앞에 0이 생략되었으므로 앞에 0이 생략되지 않도록 padStart(n, '0')을 통해 5자리가 다 채워지지 않았을 때에는 맨 앞에 0을 넣어줘야함. 만약 5자리가 다 채워져있다면(10110 등) padStart를 해도 값이 변하지 않음.

//9와 3
//1001
//0011
//1011
//# ## //앞에 공백이 하나 더있어야함. 사실은 01011인것.


//zip안쓰기
function solution(n, arr1, arr2) {
    answer = []
    for (let i = 0; i<n; i++) {
        answer.push((arr[i] | arr[2]).toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' '));
    }
    return answer;
}

////////////////////////////////////////프로그래머스 - 다트게임//////////////////////////////////////
testcase = [
    '1S2D*3T', // 37
    '1D2S#10S', // 9
    '1D2S0T' // 3
]


function solution(dartResult) {
    let answer = []; //라운드별 점수. 2, 8, 27 / 1 -2 10 / 1 2  0   
    let result = 0;
    let temp = 0;

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                temp = 10;
                // continue
                i++; //현재 인덱스와 다음 인덱스를 건너뜀.
            } else {
                temp = parseInt(dartResult[i]);
            }
        } else if (dartResult[i] == 'S') {
            answer.push(temp);
        } else if (dartResult[i] == 'D') {
            answer.push(temp ** 2);
        } else if (dartResult[i] == 'T') {
            answer.push(temp ** 3);
        } else if (dartResult[i] == '*') {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        } else if (dartResult[i] == '#') {
            answer[answer.length - 1] *= -1;
        }
    }
    for (const value of answer) {
        result += value;
    }
    return result;
}


console.log(solution(testcase[0]));
console.log(solution(testcase[1]));
console.log(solution(testcase[2]));

//정규표현식을 이용한 풀이
function solution(dartResult) {
    let 승수 = { S: 1, D: 2, T: 3 };
    let answer = dartResult.match(/([0-9]|10)([SDT])([\*\#]?)/g).map((item) => {
      return parseInt(item[0]) ** 승수[item[1]];
    });
    return answer.reduce((a, c) => a + c);
}

console.log(solution('1S2D3T'));


//정규표현식을 사용하면 보다 편하게 문자열 파싱문제를 풀 수 있습니다. 
//'1S2D*3T'.match(/([0-9]|10)([SDT])([\*\#]?)/g)



///////////////////////////////////////////////////////////////
testcase = [
    [
        3,
        [
            'Jeju',
            'Pangyo',
            'Seoul',
            'NewYork',
            'LA',
            'Jeju',
            'Pangyo',
            'Seoul',
            'NewYork',
            'LA',
        ],
    ],
    [
        3,
        [
            'Jeju',
            'Pangyo',
            'Seoul',
            'Jeju',
            'Pangyo',
            'Seoul',
            'Jeju',
            'Pangyo',
            'Seoul',
        ],
    ],
    [
        2,
        [
            'Jeju',
            'Pangyo',
            'Seoul',
            'NewYork',
            'LA',
            'SanFrancisco',
            'Seoul',
            'Rome',
            'Paris',
            'Jeju',
            'NewYork',
            'Rome',
        ],
    ],
];

for (const [cacheSize, cities] of testcase) {
    console.log(solution(cacheSize, cities));
}

// cacheSize : 3
// cities : ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]
function solution(cacheSize, cities){
    let time = 0;
    let cache = [];
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase() //문제에서 대소문자구별을 안한다고 했으므로 문자를 다 소문자로 만들어줌.
        let index = cache.indexOf(city) //indexOf는 없으면 인덱스가 -1
        if(index !== -1){
            //hit
            cache.splice(index, 1)
            cache.push(city)
            time += 1
        } else {
            //miss
            cache.push(city)
            time += 5
            if(cacheSize < cache.length){ //캐시사이즈(현재는 3)보다 캐시의 길이가 더 길면 즉, 캐시사이즈를 초과할 수 없으므로 제일 앞에있는 것을 빼줌. 제일 앞에있는것이 가장 오래된 것이기 때문. 
                cache.shift()
            }
        }
    }
    return time;
}