//일반 for문 
//i++ ++i 둘다 상관없음. 10보다 작을 때 까지 반복함.
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// forin문
// airbnb의 컨벤션에 권장, IE 전부 사용 가능
for (const i in ['one', 'two', 'three']) {
    console.log(i);
}

//forof문
// airbnb의 컨벤션에 권장, IE 전부 사용 불가
for (const i of ['one', 'two', 'three']) {
    console.log(i);
}


///////

//for문 안의 i를 밖에서 출력하면 되지 않음. (블록레벨 스코프와 렉시컬스코프)
//let과 const는 블록레벨 스코프({})를 가짐. 모든 코드 블록에서 선언된 변수를 지역변수로 인정함. 레벨 스코프라 블록 밖에서 참조할 수 없음.
if (true) {
    var a = '1'
    let b = '2' //if (블록({})) 밖에서 쓸 수 없습니다.
    const c = '3' //if (블록({})) 밖에서 쓸 수 없습니다.
}

console.log(a);  //var는 출력 가능. 하지만, 이제 var를 쓰는 시대는 지나감(변수명이 겹치면 문제가 복잡해지기 때문).

//for에서 let을 써야하는 이유는?
for (let i = 0; i < 10; i++) {
    //i라는 변수를 스코프마다 잠굽니다.
    var a ='1'
    let b = '2' //if 밖에서 쓸 수 없습니다.
    const c = '3' //if 밖에서 쓸 수 없습니다.
    console.log(i);
}

console.log(a) //var는 출력이 됨. 

////////


for (let i = 0; i < 10; i++) {
    console.log(i); //0, 1, 2, 3, 4가 출력됨.
    if (i > 3) {
        break;
    }
}

//자주 사용 (암기하기)
let data1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < data1.length; i++) {
    console.log(data1[i]);
}

let data2 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data2.length; i++) {
    console.log(data2[i+1] - data2[i]); //마지막에 NaN이출력됨. 마지막 i값이 6이 되어서 1을 더하면 7이되니까 범위를 벗어남.
}

//Nan이 출력되지 않게하려면?
let data3 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data3.length -1; i++) {
    console.log(data3[i+1] - data3[i]); //마지막에 NaN이출력되지 않음.
}

//이렇게도 수정 가능
let data4 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data4.length; i++) {
    console.log(data4[i] - data4[i-1]); //마지막에 NaN이출력되지 않음. 
}

//무한반복을 표현하는 다양한 방법
let i = 0;
for(;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break;
    }
}

for(let i = 0;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break;
    }
}

for(let i = 0;;i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
}

// 다음 수학점수의 평균을 구하세요.
// 첫번째 방법
let 수학점수 = [10, 99, 88, 85, 21, 35];
console.log((수학점수[0] + 수학점수[1] + 수학점수[2]+ 수학점수[3]+ 수학점수[4]+ 수학점수[5])/6)

//두번째 방법(그닥)
let s1 = 0;
수학점수.forEach((value => s1 += value))
console.log(s1/수학점수.length);

//세번째 방법(강사님이라면 이 방법). 0은 누적값의 초기값을 뜻함.
console.log(수학점수.reduce((a, b) => a + b, 0) / 6);

//네번째 방법
let s2 = 0;
for (let i = 0; i < 수학점수.length; i++) {
    s2 += 수학점수[i];
}
console.log(s2 / 수학점수.length);

let user = [
    {
        "_id": "633e5b1711926cc42d1fbb4b",
        "index": 0,
        "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
        "age": 28,
        "name": "Mai Montoya",
        "gender": "female"
    },
    {
        "_id": "633e5b1718d6c001d2f771c7",
        "index": 1,
        "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
        "age": 22,
        "name": "Shelley Potts",
        "gender": "female"
    },
    {
        "_id": "633e5b17fecc26a897aa2283",
        "index": 2,
        "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
        "age": 22,
        "name": "Hensley Flores",
        "gender": "male"
    },
    {
        "_id": "633e5b17267fe16c24f00591",
        "index": 3,
        "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
        "age": 20,
        "name": "Holmes Morrow",
        "gender": "male"
    },
    {
        "_id": "633e5b17b30766b9c38594f5",
        "index": 4,
        "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
        "age": 25,
        "name": "Elisa Miller",
        "gender": "female"
    }
]

for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}

let 여성 = 0;
for (let i = 0; i < user.length; i++) {
    // console.log(user[i]);
    if(user[i]['gender'] === 'female') {
        여성 +=1;
    }
}
console.log(여성);

// 남성의 수 구하기 x (비효율적)
// let 남성 = 0;
// for (let i = 0; i < user.length; i++) {
//     // console.log(user[i]);
//     if(user[i]['gender'] === 'male') {
//         남성 +=1;
//     }
// }
// console.log(남성);

//이렇게하면 남성의 수를 쉽게 구할 수 있음. 하지만 undefined가 포함될 수 있음.
console.log(user.length - 여성);

//확실한 방법
// let 남성 = 0;
// let 여성 = 0;
// for (let i = 0; i < user.length; i++) {
//     // console.log(user[i]);
//     if(user[i]['gender'] === 'female') {
//         여성 +=1;
//     } else if (user[i]['gender'] === 'male') {
//         남성 +=1;
//     }
// }
// console.log(여성);
// console.log(남성);

// 또 다른 방법
user.filter(i => i['gender'] === 'female').length;



// 암기 하기! (재귀함수 할 때 비교할 for문. 재귀로 표현할 수 있는 것은 for문으로 구현가능하고, for문으로 구현할 수 있는 것은 재귀로 구현 가능함.)

//1. 구구단
for (let 단 = 2; 단 < 10; 단++) {
    for (let 곱 = 1; 곱 < 10; 곱++) {
        console.log(`${단} X ${곱} = ${단 * 곱}`);
    }
}
// 2. 문자열 뒤집기
let txt = 'hello world';
let result = '';
for (let i = txt.length-1; i >= 0 ; i--) {
    result += txt[i];
} 

result = '';
for (let i = 0; i<txt.length; i++) {
    result = txt[i] + result;
}

// 3. 시그마
let ss = 0;
for (let i = 1; i < 101; i++) {
    ss += i;
}

// 4. 팩토리얼
let ss2 = 1;
for (let i = 1; i < 6; i++) {
    ss2 *= i;
}

//////////////////////////////
//문제 1 : 다음 입력된 숫자들의 합을 구하라
// input: '12345'
// result: 15

let x10 = '12345';
let result10 = 0;
for (let i = 0; i < x10.length; i++) {
    result10 += parseInt(x10[i]);
}

Array(100).fill(0).map((_, index) => (index + 1).toString());
Array(100).fill(0).map((_, index) => (index + 1)).join('');

//문제 2: 1부터 100사이의 숫자에서 8의 개수 세기
let x20 = Array(100).fill(0).map((_, index) => (index + 1)).join('');
let result20 = 0;
for (let i = 0; i < x20.length; i++) {
    if(x20[i] === '8'){
        result20 += 1;
    }
}
