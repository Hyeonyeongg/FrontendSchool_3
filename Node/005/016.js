// import a from './015.js'
// a(); //d가 나옴. default가 있는 것을 우선적으로 뽑아냄.

// import {a, b, c} from './015.js'
// a() //a를 실행시킴.

// import d, {a, b, c} from './015.js'
// default는 항상 앞에 적어줘야 함. 뒤에 적으면 오류 발생
// a()
// b()
// c()
// d()



//이렇게도 가져올 수 있음.
import * as all from './015.js'

console.log(all)
console.log(all.default())