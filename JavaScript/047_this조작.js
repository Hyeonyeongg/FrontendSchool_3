var peter = {
    name : 'Peter Parker',
    sayName : function(){    
        console.log(this.name);
    }
}

var bruce = {
    name : 'Bruce Wayne',
    // sayName : function(){    //사실 이렇게 하는게 더 가독성이 높음.
    //     console.log(this.name);
    // } 
}

peter.sayName() //peter Parker가 찍힘.
peter.sayName.call(bruce); //bruce wayne이 뜸. bruce가 sayName을 호출한 것. 마치, bruce에 sayName이 있는 것처럼 사용하겠다. 재사용성을 높이기 위해 사용. 


// call은 인자값이 하나
// var peter = {
//     name : 'Peter Parker',
//     sayName : function(느낌표){    
//         console.log(this.name + 느낌표);
//     }
// }
peter.sayName.call(bruce, '!'); //느낌표가 function 괄호() 안에 들어감. bruce를 호출한 것이 sayName
peter.sayName('!') //위에처럼 쓸거면 얘도 이렇게 해줘야함. 


//apply는 인자값이 여러개
var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
        console.log(this.name+ ' is '+ is + ' or ' + is2);
    }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']); //bruce가 sayName을 호출함. this의 name은 브루스네임


//bind this 고정 (bind 메서드. 함수를 어떻게 호출했는지 상관하지 않고 this 값 설정하기)
function sayName(){
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName : sayName
}

var peter = {
    name : 'peter',
    sayName : sayName.bind(bruce) //sayNmae을 bruce에 bind . 만약 바인드가 없으면 피터가찍혀야함. 바인드가 브루스로 되어있기 때무네 브루스가 나오는것. 따라서 세이네임을 실제로 호출하는 것이 bruce.
}

sayName(); //윈도우가 호출한 것. this는 윈도우인데 윈도우의 name이 없으니까 공백으로 나옴
peter.sayName(); //bruce
bruce.sayName(); //bruce