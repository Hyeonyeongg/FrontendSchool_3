const main = document.querySelector('.artcl_main');
const userTask = main.querySelector('header input'); //헤더의 인풋
const addBtn = main.querySelector('header button'); //헤더의 버튼
const listTodo = main.querySelector('.list_todo');

// 할일 추가 이벤트
addBtn.addEventListener('click', createListItem); //클릭 이벤트 발생시 createListItem 함수 실행

// 경고 메세지 생성
const message = document.createElement('strong');
message.style.display = 'none';
message.classList.add('txt_invalid'); 
main.appendChild(message);
userTask.addEventListener('input', () => {
    message.style.display = 'none';
})

// 다운로드 버튼 생성
const downloadBtn = document.createElement('button');
downloadBtn.classList.add('btn'); //css에 미리 정의해둔 스타일을 넣어줌. 
downloadBtn.textContent = '리스트 다운로드';
main.appendChild(downloadBtn);
downloadBtn.addEventListener('click', downloadFile);


// 투두를 저장할 배열
const tasks = JSON.parse(localStorage.getItem('tasklist')) || []; //or 연산자는 첫 번째 true값 혹은 마지막 false 값을 반환. 만약, 로컬 스토리지에 접근해서 tasklist 라는 데이터가 있다면 그 값이 반환되고, 아니라면 빈 배열이 반환됨. 맨 처음, tasks에는 빈 배열이 들어가게 됨. 무언가 로컬스토리지에 작성해놓은 상태라면 그 값이 tasks에 저장됨.


// 초기 화면에서 저장되어있는 데이터를 가지고 목록을 생성합니다.
if (tasks.length > 0) {
    tasks.forEach((task) => {
        genItem(task.val, task.checked);
    });
    showDownload();
}


function createListItem() {
    const inpVal = userTask.value;

    // 값이 있다면
    if (inpVal) {
        // 할일을 저장하는 객체를 생성합니다. 
        const tempTask = {
            val: inpVal, //입력 받은 값
            checked: false //todo의 상태(완료여부)
        };

        // 할일 목록에 새로운 할일을 저장합니다.
        tasks.push(tempTask);

        // 목록 요소를 생성합니다. false는 우리가 만든 아이템을 수행했는지 상태 파악. 기본적으로 아이템을 당시에는 아직 todolist를 수행하지 않은 상태이기 때문에 기본값을 false로 전달함.
        genItem(inpVal, false);

        // 할일 데이터를 localStorage 에 저장합니다.
        saveTasks();

        // 다운로드 버튼 노출 함수
        showDownload();


    } else {
        errorMsg('내용을 작성해주세요');
    }
}

// 목록 요소를 생성합니다.
function genItem(val, complete) {
    const li = document.createElement('li');
    li.textContent = val;
    listTodo.appendChild(li);

    // 인풋 입력값 초기화
    userTask.value = '';

    // 만약 수행한 일이라면
    if (complete) {
        li.classList.add('done'); //취소선이 그어짐. (초기화면에서 저장되어있는 데이터를 가지고 목록을 생성할 때, complete가 true인 아이들은 done을 그어줌)
    }

    li.addEventListener('click', () => {
        li.classList.toggle('done'); //li를 클릭할때마다 done클래스가 붙었다없어졌다 함.

        // 할일 데이터의 업데이트 함수
        buildTasks(); //li를 누르면 checked값이 true로 바뀌어야 함.
    })

    // 삭제(휴지통)버튼 만들기
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(btn);

    btn.addEventListener('click', () => {
        li.remove();

        // 할일 데이터의 업데이트 함수
        //buildTasks(); 
        //원래는 목록이 지워졌으니까 함수를 호출해서 업데이트를 해줘야함. 그런데 이것이 없어도 정상작동 됨. 왜냐하면, 버튼이 li의 자식이기 때문. 버튼의 이벤트가 실행되면 이벤트 버벌링으로 인해 82번째 줄에 있는 부모요소(li)의 버블링 이벤트가 실행됨. 따라서, 86번째 줄 bulidTasks()함수가 실행됨. 따라서, 버튼에 buildTasks()가 없어도 버튼 이벤트가 발생했을 때 li에 등록되어 있는 buildTasks가 실행되기 때문에 굳이 여기서 작성하지 않아도 됨. 만약, 부모요소의 이벤트가 캡쳐링 이벤트라면 버튼 이벤트가 실행되면 부모 요소의 이벤트는 캡쳐링 이벤트이기 때문에 실행이 안됨. (즉, 캡쳐링 이벤트일 때 업데이트 함수가 요소를 지우기 전에 발생되기 때문에 새로고침 시 반영이 안됨)혹은, 부모요소가 버블링이고, button의 이벤트리스너에 event.stopPropagation()을 작성해도 새로고침하면 제대로 지워지지 않는 것을 볼 수 있음. 
    
        // 다운로드 버튼 노출 함수
        showDownload();
    })
}

// localStorage 에 할일 목록을 저장하는 함수
function saveTasks() {
    localStorage.setItem('tasklist', JSON.stringify(tasks));
}

// 할일 정보를 업데이트 하는 함수입니다. 할일을 클릭했을 때, 혹은 할일을 제거했을 때. 
function buildTasks() {
    tasks.length = 0; //업데이트 하기 전에 기존 데이터를 초기화합니다.
    const curList = listTodo.querySelectorAll('li'); //현재 작성되어있어야할 li들을 다 불러옴.

    // 할일 정보 목록을 재생성합니다.
    curList.forEach((el) => {
        const tempTask = {
            val: el.textContent,
            checked: false
        };

        if (el.classList.contains('done')) {
            tempTask.checked = true;
        }

        tasks.push(tempTask);
    })

    saveTasks();

}


// 다운로드 버튼의 노출을 판단하는 함수
function showDownload() {
    const curList = listTodo.querySelectorAll('li'); //ul 안에 있는 li들을 모두 찾아서 넣음.

    if (curList.length > 0) { //0보다 크다는 것은 목록이 있다는 것,
        downloadBtn.style.display = 'block';
    } else {
        downloadBtn.style.display = 'none';
    }
}


// 경고 메세지 활성화 함수
function errorMsg(msg) {
    message.style.display = 'block';
    message.textContent = msg;
    userTask.focus(); //input 창에 포커스가 잡힘.
}


function downloadFile() {
    let temp = '<나의 할일 목록>\n\n';

    const curList = listTodo.querySelectorAll('li');

    curList.forEach((el) => {
        if (el.classList.contains('done')) {
            temp += '완료 - ';
        }
        temp += `${el.textContent}\n`;
    })

    let element = document.createElement('a'); //앵커 태그의 다운로드 속성을 통해서 파일을 다운로드 받을 수 있었음. 여기서는 앵커는 화면에 그려주는 것은 아니고, 메모리안에만 존재함.

    element.setAttribute('href', `data:text/plain;charset=utf-8,${temp}`); //플레인한 텍스트를 데이터로써 전달해준다. data: 스킴이 접두어로 붙은 URL은 컨텐츠 작성자가 작은 파일을 문서 내에 인라인으로 임베드할 수 있도록 해줌. 즉, 작성한 문서파일을 다운로드할 수 있게 만들어줌,

    element.setAttribute('download', 'todoList.txt'); //다운로드 속성에 값을 설정하면 다운로드 받을 수 있는 파일명을 설정할 수 있음. 만약, 한글 파일을 받고싶다면 .txt를 .hwp로 바꿔주면 됨.  href에 지정된 파일을 다운로드해줌.

    // 클릭 가능한 요소라면 클릭을 시뮬레이션합니다. 앵커를 클릭한 것과 같은 현상. 즉, 자바스크립트 코드로 앵커를 눌렀다고 보면됨. (버튼이 눌렸을 때 앵커도 눌리게됨.)
    element.click();

    // 메모리상에서 a 태그를 제거합니다. 앵커는 클릭함수가 작동하고 나면 쓸모가 없어서 제거해줘야함. 즉, 메모리 상에서 a태그를 제거해주는 것. 제거하지 않으면 element라는 변수 안에 들어있는 a는 계속 남아있게 됨. 메모리를 아끼는 측면에서 null을 할당해서 지워주어야 함. null을 할당하면 가비지컬렉터가 null이 할당된 변수를 보고 지워주게 됨.
    element = null;
}