// while(조건문) {
//     실행문;
// }

let i = 0;
while (i <10) {
    console.log(i);
    i++;
}

while (true){
    console.log('무한반복!!');
}

// 구구단은 암기해주세요.
let i = 2;
let j = 1;
while (i <10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1; //j를 1로 초기화해줘야함. 없으면 2단에서 j가 10이되고 3단에서 j<10조건이 충족되지 않아서 3단부터 출력되지 않음.
    i++;
}

// 4단에서 끊기
let i = 2;
let j = 1;
while (i <10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;
    if (i >= 4) {
        break;
    }
    i++;
}


let value = [10, 20, 30, 40];
let x = 0;
while(x < value.length) {
    console.log(value[x]);
    x++;
}

// do...while문 : 무조건 한번 실행 해야할 때 사용 
let sum = 0;
let i = 0;

do {
		i++;
		sum += i;
} while (i < 10);

console.log(sum);

let i = 2;
let j = 1;
while (i <10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;
    if (i == 4) {
        break; //해당 위의 반복문을 탈출함.
    }
    i++;
}

//무한반복
let i = 2;
let j = 1;
while (i <10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;
    if (i == 4) {
        continue; //다음 반복문으로 감.아래 코드 무시. 계속 i값에는 4가 있게되고, 4단이 무한반복됨.
    }
    i++;
}

// 4단이 없음.
let i = 1;
let j = 1;
while (i <9) {
    i++;
    if (i == 4) {
        continue; //continue는 밑에 것을 실행시키지 않고 다음 루프로 감.
    }
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;
}

// 4, 5를 건너뜀
for (let i = 0; i < 10; i++) {
    if (i === 4 || i === 5) {
        continue
    }
    console.log(i);
}

// 0, 1, 2, 3까지만 출력하고 끝남.
for (let i = 0; i < 10; i++) {
    if (i === 4 || i === 5) {
        break; 
    }
    console.log(i);
}

// 레이블 (보통 사용할 일이 거의 없음. 권하지 않음. 코드의 가독성이 떨어짐. )
timestable: 
for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break timestable; //x가 4일때 timestable로 이동하겠다. 그래서 안쪽에서 바깥쪽으로 이동하게 됨. 루프가 몇개든 원하는 위치로 바로갈 수 있음.
		console.log(`${x} X ${y} = ${x * y}`);
	}
}


for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break; // x가 4였을 때가 없음.나를 감싸고 있는 루프 하나만 벗겨진것.
		console.log(`${x} X ${y} = ${x * y}`);
	}
}


// 💡 레이블 사용시 주의사항
// - 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// - `break`문은 모든 레이블에서 사용할 수 있다.
// - `continue`문은 반복문에서만 사용 가능하다.



