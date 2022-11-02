//트리 구현
const tree = {
    root: { //head의 역할을 함. 링크드리스트와 동일
        value: 5,
        left: {
            value: 3,
            left: {
                value: 1,
                left: null,
                right: null,
            },
            right: {
                value: 4,
                left: null,
                right: null,
            }
        },
        right: {
            value: 8,
            left: {
                value: 6,
                left: null,
                right: null,
            },
            right: {
                value: 9,
                left: null,
                right: null,
            }
        }
    }   
}

//////////////////////////////////////////////
(5, [3, [1, [], []], [4, [], []]], [8, [6, [], []], [9, [], []]]) //배열로 구현한 트리

/////////////////////////////////////////////
const root = {
    value : 55,
    left: null,
    right: null,
}

node1 = {value : 53, left: null, right: null}
node2 = {value : 99, left: null, right: null}
node3 = {value : 37, left: null, right: null}
node4 = {value : 54, left: null, right: null}

root.left = node1;
root.right = node2;

node1.left = node3; 
node1.right = node4;

/////////////////////////////////////////////
class Node {
    constructor(data) {
        this.data = data
        // this.child = [] //이진트리가 아닌 트리를 만들 때 사용할 수 있음. (자식이 여러명일 때) 
        this.left = null
        this.right = null
    }
}

root = new Node(55);
node1 = new Node(53);
node2 = new Node(99);
node3 = new Node(37);
node4 = new Node(54);

root.left = node1;
root.right = node2;

node1.left = node3; 
node1.right = node4;
//////////////////////////////////////////////
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data);
        this.root = init;
        this.length = 0;
    }

    // length() { //this.length와 이름이 같아서 작동하지 않습니다. 이름을 바꿔도되지만 어차피 this.length랑 하는일이 같아서 굳이 메서드로 만들 필요는 없음.
    //     return this.length;
    // }

    //데이터 삽입. 삽입을 하려면 일단 순회를 돌아야함.
    insert(data) {
        let 새로운노드 = new Node(data);
        let 순회용현재노드 = this.root;

        //순회용현재노드에 null이 들어가면 stop이 됨.
        while(순회용현재노드){
            if(data == 순회용현재노드.data) { 
                //들어온 값이 이미 존재하는 값이면 트리에 추가하지 않음. 즉, 중복된값은 허락하지 않음
                return; 
            } else if(data < 순회용현재노드.data) {
                //들어온 데이터가 작은 경우 왼쪽에 붙여야함!
                //해당 데이터 부분이 비어있으면(null) 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야합니다.
                if(!순회용현재노드.left) { //!null은 true. 순회용현재노드.left가 null이면 true
                    순회용현재노드.left = 새로운노드; //노드를 가리킴
                    this.length += 1;
                    return; //insert함수 종료
                }
                순회용현재노드 = 순회용현재노드.left; //다시 while문이 반복됨.
            } else if(data > 순회용현재노드.data) {
                //들어온 데이터가 큰 경우 오른쪽에 붙여야함!
                //해당 데이터 부분이 비어있으면(null) 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야합니다.
                if(!순회용현재노드.right) { 
                    순회용현재노드.right = 새로운노드; 
                    this.length += 1;
                    return;
                }
                순회용현재노드 = 순회용현재노드.right; 
            }
        }
    }

    //깊이우선탐색
    DFS() {
        //스택이용!
        let 방문경로 = []
        let 스택 = [this.root]

        while(스택.length !== 0){
            let current = 스택.pop()
            if (current.right) { //오른쪽 왼쪽 탐색 순서 바꾸고 싶으면 조건문의 순서를 바꿔주면 됨.
                스택.push(current.right);
            }
            if (current.left) {
                스택.push(current.left);
            }
            방문경로.push(current.data)
        }
        return 방문경로;
    }

    //너비우선탐색
    BFS() {
        //큐이용!
        let 방문경로 = []
        let 큐 = [this.root]

        while(큐.length !== 0){
            let current = 큐.shift()
            if (current.right){
                큐.push(current.right)
            }
            if (current.left){
                큐.push(current.left)
            }
            방문경로.push(current.data)
        }
        return 방문경로
    }
}

let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.DFS();
t.BFS();

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//프로그래머스 오픈채팅방
let record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
];

function solution(record){
    let answer = [] // [[uid1234, '님이 들어왔습니다.], [uid4567, '님이 들어왔습니다.], [uid1234, '님이 나갔습니다.], [uid1234, '님이 들어왔습니다.], ]
    let 유저정보 = {} //아이디: 닉네임 {uid1234: prodo, uid4567: Ryan}
    for(const i of record) {
        const [상태, 아이디, 닉네임] = i.split(' ')
        //answer.push([상태, 아이디, 닉네임])
        if (상태 === 'Enter') {
            유저정보[아이디] = 닉네임
            answer.push([아이디, '님이 들어왔습니다.'])
        } else if (상태 === 'Leave') {
            answer.push([아이디, '님이 나갔습니다.'])
        } else if (상태 ==='Change') {
            유저정보[아이디] = 닉네임; 
        }
    }
    //console.log(유저정보)
    answer = answer.map(item => 유저정보[item[0]] + item[1]);
    return answer;
}

solution(record)

////////////////////////////////////////////////////////////////////////////////////////////////////////
//프로그래머스 실패율
function solution(N, stages) {
    let 실패율 = [] // [{1, 1/8}, {2, 3/7}, {3, 2/4}, {4, 1/2}, {5, 0/1}  ]
    let 유저수 = stages.length //8-> 7 -> 4 -> 2 -> 1 -> 1

    for(let i =1 ; i <= N ; i++) {
        let 클리어못한사람수 = stages.filter((user) => user === i).length
        let 확률 = 클리어못한사람수/유저수
        실패율.push({스테이지: i, 확률})
        유저수 -= 클리어못한사람수
        // console.log(유저수, 클리어못한사람수)
    }
    console.log(실패율)

    //정렬 기준 확인 필요 
    실패율.sort((a, b) => { //실패율이 높은 스테이지부터 내림차순으로 정렬
        if(a.확률 < b.확률) return 1;
        if(a.확률 > b.확률) return -1;
        if(a.확률 === b.확률) return 0;
    })
    return 실패율.map(object => object.스테이지);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]) //6은 5번스테이지를 다 깬 사람을 의미함. 



// 실패율
// 1stage === 1/8
// 2stage === 3/7 === 3/(8-1)
// 3stage === 2/4 === 2/(7-3)
// 4stage === 1/2 === 1/(4-2)
// 5stage === 0/1 === 0/(2-1)