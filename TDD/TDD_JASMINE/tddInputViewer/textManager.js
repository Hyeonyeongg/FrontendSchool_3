// 사용자가 입력한 값을 관리
class TextManager {
    constructor() {
        // 그냥 "Hello Lions!"로 해도 상관 없지만 나중에 값을 추가하기 용이하도록 객체형태로 전달. 
        this.value = { data: "Hello Lions!" };
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value = newValue;
    }
}