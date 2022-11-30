class ViewManager {
    constructor(textManager, options) {
        if (textManager.constructor !== TextManager) {  //TextManger의 인스턴스가 맞는지 확인. (예외처리)
            // throw Error : 사용자 정의 에러. 에러 메시지를 반환하고 프로그램을 종료합니다.
            throw Error('textManager 객체를 전달해야합니다!');
        }

        //첫번째 truthy 값 혹은 마지막 falsy값 반환. 하나라도 빠지면 에러 발생
        if (!options.viewerEl || !options.btnEl || !options.inpTxt) {
            throw Error('필요한 요소중에 빈값이 존재합니다.');
        }

        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        this.textManager = textManager;

        options.btnEl.addEventListener('click', () => {
            this.changeValue();
        })
    }

    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value });
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }

}