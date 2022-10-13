// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC

//replace는 "정규표현식"에 매칭되는 항목을 "대체문자열"로 변환
("paullab CEO leehojun hello CEO").replace(/CEO/, "CTO"); //두번째로 나오는 CEO는 수정이 안됨.
("paullab CEO leehojun hello CEO").replace(/CEO/g, "CTO"); //g라는 플래그를 붙여주면 둘다 CTO로 바뀜. global하게 바꾸겠다.
("paullab CEO leehojun hello CEO").match(/CEO/g); //"문자열"에서 "정규표현식"에 매칭되는 항목들을 배열로 반환
("paullab CEO leehojun hello CEO").split(/CEO/g); //"문자열"을 "정규표현식"에 매칭되는 항목으로 쪼개어 배열로 반환

/*
'!!!'.split('!')
(4) ['', '', '', '']
'a!a!a!a'.split('!')
(4) ['a', 'a', 'a', 'a']
'a!a!a!'.split('!')
(4) ['a', 'a', 'a', '']
'!a!a!'.split('!')
(4) ['', 'a', 'a', '']
*/

(/CEO/g).test("paullab CEO leehojun hello CEO"); //"문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환


// 3. 일반문자열
/hello/g

// 4. 처음과 끝
/^hello/g //hello로 시작하는 것
/hello$/g //hello로 끝나는것.
/^hello$/g //시작과 끝이 hello인것. (hellohello는 안됨.)

// 5. 모든 문자 매핑 (.위치에 어떤 문자가 들어가도 상관없음)
/hello/g
/h.llo/g //모든 1개의 문자열 
/hello..world/g //모든 2개의 문자열

//6. 택1
/h[eao]llo/g //3개 중에 하나가 들어있는 것. e나 a나 o인 문자 하나

//7. 범위
/h[a-zA-Z0-9]llo/g //a-z나 A-Z나 0-9인 문자 하나. 대괄호는 하나만 매핑함.

//8. 부정
/h[^ae]llo/g //a나 e가 아닌 문자 하나.


//9. 그루핑 규칙 (결과가 그룹으로 묶임)
/(on|ues|rida)/gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음. 
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a|e|o)ll./gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

("hello hallo hello").match(/.(a|e|o)ll./g)
//아래 두 개는 결과가 같게 출력됨.
("hello hallo hello hello hi").match(/.(a|e|o)ll./g); //a로 매칭된 것을 그룹으로 감싸주고, e로 매칭된 것을 그룹으로 감싸주고, o로 매칭된 것을 그룹으로 감싸줌. 콘솔창에 출력하면 그룹으로 나오지는 않음. 다른언어에서는 그룹으로 만들진다고함. 
("hello hallo hello hello hi").match(/.[eao]ll./g); 


// 10. 수량자
/*
    _* : 앞에 있는 문자가 0개 ~ N개
    _+ : 앞에 있는 문자가 1개 ~ N개
    _? : 앞에 있는 문자가 0개 ~ 1개

    {3} : 3개
    {3,} : 3개 이상
    {1,3} : 1개 ~ 3개

    _* : 앞에 있는 문자가 0개 ~ N개 ({0,})
    _+ : 앞에 있는 문자가 1개 ~ N개({1,})
    _? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

    /[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
    /[0-9a-zA-Z]{2,3}[-.* ][0-9]{3,4}[-.* ][0-9]{4}/gm
    /[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm //@, .는 무조건 나와야되는것
*/

// https://school.programmers.co.kr/learn/courses/30/lessons/49993
// ["BACDE", "CBADF", "AECB", "BDA"]

"CAZGBEUDKKCAEEEEEBEEEDEEEEEEEEE"

("CAZGBEUDKKA").match(/[CBD]/g)
("CEEEEEBEEEDEEEEEEEEE").match(/[CBD]/g)

let data = ["BACDE", "CBADF", "AECB", "BDA"]

for (i of data){
    // console.log(i)
    // console.log(i.match(/[CBD]/g))
    for (i of i.match(/[CBD]/g)) {

    }
}

// 코딩이 아니라 알고리즘만 설명한 것입니다.
// [원본, 매핑문자열]
[['C']['B']['D']]
[['C', 'B']['B', 'C']['D', 'D']]
[['C', 'C']['B', 'B']['D', 'D']] 결과 += 1
[['C', 'C']['B', 'B']['D', '']]  결과 += 1
[['C', 'B']['B', 'D']['D', '']]

const zip = (a, b) => a.map((v, i) => [v, b[i]])
zip([10, 20, 30], [1, 2, 3, 4])
zip([10, 20, 30], [1, 2])

/////////////////////

const zip = (a, b) => a.map((v, i) => [v, b[i]])

let data = ["BACDE", "CBADF", "AECB", "BDA"]

for (i of data){
    for ([x, y] of zip('CBD'.split(''), i.match(/[CBD]/g))) {
        console.log(x, y)
    }
    console.log('----------')
}

// 11. 캐릭터 클래스
/\w{5}/g //문자5개
/\w{5} /g //이렇게 뒤에 공백이 있으면 빈문자열 하나도 포함함.
/\W/g //not 워드
/\d/gm : 숫자
/\D/gm : not 숫자
/\s/gm : 스페이스
/\S/gm : not 스페이스


//12. 이스케이프 문자
/\[.*]/gm : 대괄호([]) 안에 감싸여진 문자열 //대괄호는 원래 택1인데 문자 그대로의 대괄호를 보고 싶은 것. 대괄호안에 감싸진 문자열을 전부다 뽑아내겠다. .은 모든 문자열 *은 0개에서 n개 \[.*\] 이게 조금더 보기 좋다고하심.
/\(.*\)/gm : 소괄호 안에 감싸여진 문자열
/\\.*\//gm : 이미 사용되고 있는 특수문자로 감싸여진 문자열 (\dddd/)
/-.*-/gm : 이스케이프 문자를 사용할 필요가 없는 경우
/\^\^/gm : 이스케이프 문자가 필요한 경우
/:\)/gm : 이스케이프 문자가 필요한 경우

/*
- `^` : 문자열의 시작
- `$` : 문자열의 종료. 옵션에 따라 문장의 끝 또는 문서의 끝에 매치된다.
- `.` : 임의의 한 문자
- `[]`: 문자 클래스. 문자 클래스 안에 들어가 있는 문자는 그 바깥에서 하나의 문자로 취급된다.
- `^` : 문자 클래스 내에서 ^는 not
- `-` : ex) a-z는 a에서 z까지의 문자
- `|` : or를 나타냄
- `?` : 앞 문자가 없거나 하나 있음
- `+` : 앞 문자가 하나 이상임
- `*` : 앞 문자가 0개 이상임
- `{n,m}` : 앞 문자가 `n`개 이상 `m`개 이하. `{0,1}` 은 `?`와 같은 의미다.
- `{n,}` : 앞 문자가 `n`개 이상. 위의 형태에서 `m`이 생략된 형태이다. `{0,}` 이면 `*`와 같고 `{1,}` 이면 `+`와 같은 의미이다.
- `{n}` : 앞 문자가 정확히 `n`개. `{n,n}` 과 같은 의미이다.
- `()` : 하나의 패턴구분자 안에 서브 패턴을 지정해서 사용할 경우 괄호로 묶어주는 방식을 사용한다.
- `\s` : 공백문자
- `\b` : 문자와 공백 사이를 의미한다.
- `\d` : 숫자 [0-9]와 같다.
- `\t` : 탭문자
- `\w` : 단어 영문자+숫자+_(밑줄) [0-9a-zA-Z_]문자 이스케이프는 대문자로 적으면 반대를 의미한다.
[a-z] : a ~ z 사이의 문자를 찾음
[1-9] : 1 ~ 9 사이의 문자를 찾음
[abc] : a, b, c중 하나를 찾음
[^abc] : a, b, c를 제외한 문자를 찾음
.z : 아무 문자 하나를 . 기호로 찾으며 z로 끝남을 의미
a+ : a가 1개 이상을 의미함
a* : a가 0개 또는 그 이상을 의미함
s : 공백 문자를 찾음(스페이스, 탭 등), 대문자의 경우 아닌 문자를 찾음
d : 숫자를 찾음, 대문자의 경우 아닌 문자를 찾음
w : 알파벳 영문과 숫자와 언더바 _ 기호를 찾음, 대문자의 경우 아닌 문자를 찾음
t : 탭 공간을 찾음
g : 검색범위를 전역으로 확장
i : 대소문자를 구분하지 않음
gi : 검색 범위를 전역으로 확대하면서 대소문자를 구분하지 않음
m : 여러줄을 동시에 매칭함
*/

////////////////// 연습문제 /////////////////
// 0 문자 제거
let s = '010100020201020304812123';
s.replace(/[^1-9]/g,"")
'11221234812123'

// 앞 뒤 공백 제거(캐릭터 클래스 `\s`사용)
s = '   010100020201020304812123    '
s.replace(/^\s+|\s+$/g,'')
'010100020201020304812123'

// 문자열 내 공백 제거
s = '  01010002020   102030  4812123  ';
s.replace(/\s/g,'')
'010100020201020304812123'

// 개행 제거
s = `
a
b
c
d
`
'\na\nb\nc\nd\n'
s.replace(/\n/g,'')
'abcd'

s = "hello world HELLO WORLD";
s.match(/hello/gi);

s1 = '010-5000-2000'
s2 = '010 5000 2000'
s3 = '010~5000!2000'
s4 = '010!!5000!!2000'
s5 = '01050002000'

s1.split(/-/g)

// hint
// s.split(/([a-z])([0-9])/g)
// s.split(/([a-z]{3})/g)

s1.split(/([0-9]{3})[- ~!]*([0-9]{4})[- ~!]*([0-9]{4})/)
// 'aaa-bbb'.split(/(-)/);
// ['aaa', '-', 'bbb']
// 'aaa-bbb'.split(/-/);
// ['aaa', 'bbb']
// '010-5000-2000'.split(/(010)-(5000)-(2000)/)
// ['', '010', '5000', '2000', '']


////////////////// 그룹 연습문제 /////////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오. 숫자는 항상 2개만 있고, 알파벳은 1개 이상 있을 수 있습니다.

// 87a99b00fww89e => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/(\d+)(\w)/g)
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/[0-9]+[a-zA-Z]/g)

// 다음 패턴에서 ello와 zi 는 몇 개가 있는가?
'hellohelellolozihelloelzilellozi'.match(/ello/g)
'hellohelellolozihelloelzilellozi'.match(/zi/g)
'hellohelellolozihelloelzilellozi'.match(/(ello|zi)/g)