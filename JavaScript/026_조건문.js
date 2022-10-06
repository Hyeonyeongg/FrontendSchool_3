//구조

let 조건식 = true;
if (조건식) {
    //조건식이 참일 경우 실행될 코드
    console.log("중괄호를 사용했습니다.");
}

if (조건식) console.log("중괄호를 생략했습니다.");

let 조건식1 = true;
let 조건식2 = true;

if (조건식1) {
    // 조건식1이 참(true)일 경우 실행될 코드
    console.log(1);
} else if (조건식2) {
    // 조건식1이 거짓(false)이고 조건식2가 참(true)일 경우 실행될 코드
    console.log(2);
} else {
    // 조건식1, 2 모두 거짓일 경우 실행될 코드
    console.log(3);
}

///
//point1: else if를 여러번 쓸 수 있음.
//point2: socre >80은 score =<90의 의미도 담고 있음. 앞(if문)의 false의 의미가 뒤에도 담겨있다는 것을 염두하기
let money = 1000;
let score = 89;

if (score > 90) {
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m happy"');
    money += 100000;
} else if (score > 70) {
    console.log('mom : "happy?"');
    money += 10000;
} else if (score > 60) {
    console.log('mom : "happy!!!"');
} else {
    console.log('mom : "..."');
    money = 0;
}

/// if문의 중첩. 모든 if문에 동일한 if문이 모든 코드에 중첩되고 있음. 이렇게 사용할 필요가 없음.
if (score > 90) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "i\'m happy"');
    money += 100000;
} else if (score > 70) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "happy?"');
    money += 10000;
} else if (score > 60) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "happy!!!"');
} else {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "..."');
    money = 0;
}

// 모든 if문에 중첩되는 if문이 있다면 바깥으로 빼주면 됨. 한 두개만 반영되면 그냥 써주는 것이 좋음.
if (money >= 100000000){
    money -= 10000000
}

if (score > 90) {   
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m so happy"');
    money += 100000;
} else if (score > 70) {
    console.log('mom : "i\'m so happy"');
    money += 10000;
} else if (score > 60) {
    console.log('mom : "i\'m so happy"');
} else {
    console.log('mom : "i\'m so happy"');
    money = 0;
}

//switch문
let value3 = 'three'
switch (value3) {
    case 'one':
        console.log(1);
        break;
    case 'two':
        console.log(2);
        break;
    case 'three':
        console.log(3);
        break;
    case 'four':
        console.log(4);
        break;
}

//만약, switch문에 break가 없으면 뒤에 것('two'이후)이 쭉 출력 됨. (2, 3, 4가 출력됨)
switch ('two') {
    case 'one':
        console.log(1);
    case 'two':
        console.log(2);
    case 'three':
        console.log(3);
    case 'four':
        console.log(4);
}

