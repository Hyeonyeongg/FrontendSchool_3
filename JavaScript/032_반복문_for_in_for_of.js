//for in 반복문 : 객체에 포함된 모든 프로퍼티에 대해 반복문을 수행함.
// for in은 키 값을 순차적으로 가져오는 것.
//배열에서는 키값이 인덱스가 됨. (배열 역시 객체 이므로 for in문 사용 가능)

let data = {
    'one' : '하나',
    'two' : '둘',
    'three' : '셋',
    'four' : '넷',
}

//in으로 하면 i에 key가 하나씩 들어감.
for (const i in data) {
    console.log(i);
}

for (const i in data) {
    console.log(i);
    console.log(data[i]); //value 출력
}

let data2 = [10, 20, 30, 40];

//배열에서 in을 사용할 경우 인덱스가 출력됨. 마치, 배열은 인덱스:값으로 이루어져 있는 것. 
for (const i in data2) {
    console.log(i);
}

//유사 배열 객체. (data2가 마치 이렇게 작동하는 것.)
let data3 = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
}
for (const i in data3) {
    console.log(i);
}

//문자열도 마찬가지로 인덱스 값이 출력됨.
for (const i in 'hello world') {
    console.log(i);
}


// for of는 IE에서 사용이 불가함.
// array(배열) 반복문
// 값이 출력됨.
for(const i of data2) {
    console.log(i);
}

for (const i of 'hello world') {
    console.log(i);
}

//1+2+3+4+5 값 출력하기
let s = 0;
for (const i of '12345') {
    s += parseInt(i);
}

const seat = [['피카츄' , '라이츄', '파이리' ],
			['꼬부기' , '버터플', '야도란' ],
            ['피죤투' , '또가스', '메타몽' ]];

//for 문 사용
for (let i = 0; i < seat.length; i++) {
    const row = seat[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//for of 문 사용
for (let row of seat) {
    for (let pocketmon of row) {
        console.log(pocketmon);
    }
}


//질의응답
let data = {
    'one' : '하나',
    'two' : '둘',
    'three' : '셋',
    'four' : '넷',
}

for (const i in data) {
    console.log(i)
    console.log(data[i]);
    console.log(data.i); // error (i를 변수로 인식하지 못하고 문자로 인식함)
}

