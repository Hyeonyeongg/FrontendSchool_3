function getEmptyRoomCount(hotel) {
    return hotel.방의개수 - hotel.예약자수;
}

let 호텔 = [
    {
        '이름' : '하나호텔1',
        '방의개수' : 50,
        '예약자수': 25,
        '남은방의개수' : function(){return this.방의개수 - this.예약자수} //this가 가리키는 애는 하나호텔1
    }, {
        '이름' : '하나호텔2',
        '방의개수' : 40,
        '예약자수': 25,
        '남은방의개수' : function(){return this.방의개수 - this.예약자수} //this가 가리키는 애는 하나호텔2
    }, {
        '이름' : '하나호텔3',
        '방의개수' : 30,
        '예약자수': 25,
        '남은방의개수' : function(){return this.방의개수 - this.예약자수} //this가 가리키는 애는 하나호텔3
    }, {
        '이름' : '하나호텔4',
        '방의개수' : 25,
        '예약자수': 25,
        '남은방의개수' : function(){return this.방의개수 - this.예약자수} //this가 가리키는 애는 하나호텔4
    },
]

//남은 방의 개수 확인하기
//호텔[0]["방의개수"] - 호텔[0]["예약자수"]
console.log(호텔[0]['남은방의개수']()); //this는 .찍은 것 앞에것을 this로 삼는데 모양이 애매함. 하지만, 이것도 아래 결과값과 같다는 것을 기억해두기
console.log(호텔[0].남은방의개수()); //객체 안에서 바로 호출할 수 있기 때문에 자료파악이 용이
console.log(getEmptyRoomCount(호텔[0])) //메모리 공간에 이득. 위에 것이나 아래것이나 취향차이


