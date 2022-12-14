//클로저는 폐쇠된 공간안의 데이터에 접근하기 위한 테크닉. 변수 은닉, 메모리 효율, 코드 효율을 극대화하기 위해 사용함.
function 제곱(x) {
    function 승수(y) {
        return y ** x
    }
    return 승수 //결과값이 아니라 함수 이름을 리턴함.
}

var 제곱2 = 제곱(2); //2는 x에 전달되는 값. 제곱(2)는 승수를 리턴함. 따라서, 제곱2=승수;가 됨. 이때, 승수(y)의 y**x에서 x값은 밖에 들어온 2를 참고하고 있음. 아직 y는 들어온게 없음. 
제곱2(3) //9가 됨. 제곱2가 승수이므로 승수(3)과 같음. 따라서, 3**2 해서 9가 나온것.
제곱2(10) // 100이 됨. 10**2

function 제곱(x) {
    function 승수(y) {
        return y ** x
    }
    return 승수 
}

console.log(제곱(2)(3)) //9가 나옴. 제곱함수는 승수를 리턴하고 있음. 그럼 제곰(2)가 승수가 되고, 이때, 승수는 x는 2를 참고하게 됨. 그리고, 승수(3)이 됨. return y **x에서 x의 값이 밖에 x를 참조할 수 있다는 것이 핵심. 따라서, 3**2해서 9가 나옴.


///////////////////////////////////////////////////
function makeAdder(x) {
    var y = 1;
    return function(z) {
        y = 100;
        return x + y + z; //makeAdder(5)를 통해 x가 5로 인식됨. y는 100.자기 자신에게서 가까운 값을 할당함. 밖에 있는 y보다 안에 있는 y가 가깝기 때문에 100. z는 값이 없음. makeAdder의 리턴값은 function(z). 아직 z값이 할당되지 않은 상태에서 함수만 리턴됨.
    };
}

var add5 = makeAdder(5); //add5에는 makeAdder(5)의 반환값 function(z)가 들어가고 이때, x는 5로 고정됨. add5(2)를 하면 z는 2가 됨. 
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능

//왜사용? 재사용성이 높은 것도 있지만 정보의 은닉때문. add5(2) 에서 y값에 접근할 수 있는 방법은 없음. 다른 코드들이 var y =1 을 만지는 것 자체가 불가능하게 한다. 특수한 경우에 절대로 변하면 안되는 코드들. 예를들어, 주식 차트를 그려준다던지 이런 코드는 은닉될 필요가 있음.

// 클로저는 생명주기와도 연관이 되나요?
//답 : 함수의 생명주기로 보았을 때 클로저는 마치 내부 함수가 외부 함수보다 오래 살아있는 것처럼 보입니다. 여기서 내부 함수가 외부함수의 변수를 참고하고 있을 경우 '외부 함수는 생명주기가 끝났지만(실행 컨텍스트 스택에서는 제거됨)' 외부 변수는 메모리에서 해지되지 않습니다.(가비지컬렉터가 메모리를 회수하지 않습니다.) 폐쇠된(Closer) 공간에 접근하게 되는거죠.
