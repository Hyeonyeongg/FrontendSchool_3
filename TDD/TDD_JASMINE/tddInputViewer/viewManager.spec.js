describe('클릭이벤트 및 뷰를 담당하는 클래스입니다.', () => {

    it('viewManager의 인자로 textManager의 인스턴스가 전달되는지 확인합니다.', ()=>{
        //에러를 잘 던지는지 확인하기 위해 일부러 실패로 만듦.
        const textManager = null; 
        //첫번째 예외처리 if문에서 에러가 나는지 확인하려고 하는 것이기때문에 어떠한 값(button 대신 div 등)이 들어가도 상관없음. 구색맞추는 용도.
        const btnEl = document.createElement('button');
        const viewrEl = document.createElement('h2');
        const inpTxt = document.createElement('input');

        //자스민에서 expect 안에 전달하는 인자를 actual 이라고 부르기 때문에 상수 이름을 설정한것 뿐 다른이름이어도 됨.
        const actual = () => new ViewManager(textManager, {btnEl, viewrEl, inpTxt});

        //애러를 던지는지 확인.
        expect(actual).toThrowError(); //actual을 던졌을 때 에러가 발생하는지 안하는지를 확인하는 코드. 
    })

    it('viewManager의 인자로 HTML 요소들이 잘 전달되는지 확인합니다.', () => {
        const textManager = new TextManager(); //두번째 예외처리 if문을 확인하는 것이기 때문에 첫번째는 무사통과해야하므로 인스턴스를 생성해줌.
        const btnEl = null;
        const viewerEl = null;
        const inpTxt = null;

        const actual = () => new ViewManager(textManager, {btnEl, viewerEl, inpTxt});
        
        expect(actual).toThrowError();
    })

    const textManager = new TextManager(),
    btnEl = document.createElement('button'),
    viewerEl = document.createElement('h2'),
    inpTxt = document.createElement('input'),
    viewManager = new ViewManager(textManager, {btnEl, viewerEl, inpTxt});


    it('click 이벤트가 발생했을 경우 changeValue 함수가 실행되는지 확인합니다.', () => {
        //spyOn : 특정 객체의 메서드를 감시합니다.
        spyOn(viewManager, 'changeValue'); //감시 viewManager안에 있는 'changeValue'를 감시함.
        btnEl.click(); //클릭을 해줌.

        //toHaveBeenCalled : 함수가 과거에 호출된적이 있는지 확인합니다. 호출한적이 있는가?
        //viewManager의 changeValue가 실행되길 기대한다. 불려졌는지는 것을 기대한다.  
        expect(viewManager.changeValue).toHaveBeenCalled();
    })

    //updateView()는 따로 테스트하지 않음. get함수를 textManage.spec.js에서 이미 테스트했기 때문.

    it('changeValue 함수를 통해 updateView 함수가 호출되는지 확인합니다.', () => {
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();

        expect(viewManager.updateView).toHaveBeenCalled();
    })
})