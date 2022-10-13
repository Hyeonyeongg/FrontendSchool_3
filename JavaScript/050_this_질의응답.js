let 인세규정 = {
    책:10,
    영상콘텐츠:50
}

function 인세계산함수(e){
    return e *(this.책/100)
}
    
[100, 200, 300].map(인세계산함수, 인세규정) 
//arr.map(callback(currentvalue[, index[, array]])[, thisArg])
//thisArg는 callback을 실행할 때 this로 사용할 값임. 
//따라서, 인세규정은 thisArg를 의미함. 즉, this.책은 인세규정에 있는 책(인세규정.책)을 의미함.