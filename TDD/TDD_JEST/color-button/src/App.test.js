import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//자스민에서의 describe와 동일. 
test('버튼이 제대로 동작하고 있습니까?', () => {
  render(<App />); //render는 jsx를 인자로 받음. 테스트를 위한 가상돔을 생성함. (실제 브라우저는 나오지 않음) 마치, it함수 안에서 초기화해주는 역할. 리액트가 실행됐다고 환경을 꾸며주는것. 
  // const linkElement = screen.getByText(/learn react/i); //screen은 생성된 가상돔에 접근하기 위한 전역 객체. 인자로 전달된 텍스트를 가지는 돔 안의 텍스트 노드를 찾음. learn react를 찾고 있는데 뒤에 i가 붙으면 텍스트를 대소문자 구분하지 않고 찾겠다. 그것(a태그)을 변수에 할당하고 있음.
  // expect(linkElement).toBeInTheDocument(); //linkElement가 도큐먼트안에 있어야함을 기대한다.
  
  
  //버튼을 찾는 방법은 getByRole 명령어 사용. 롤의 종류, (버튼)안에 있는 텍스트를 인자로 받음.
  //텍스트에 접근하는 프로퍼티 키는 name으로 정해져 있음.
  // button의 역할을 하는 요소를 검색하며, 요소 안의 텍스트는  'change to blue!'여야 합니다.
  const button = screen.getByRole('button', {name: 'change to blue!'});

  // 버튼 요소의 배경색이 red이길 기대합니다.
  //버튼을 기대한다. 버튼이 스타일이 배경색이 빨강색이길 기대한다.
  expect(button).toHaveStyle({backgroundColor: 'red'});

  fireEvent.click(button) //전달하는 인자를 클릭했을 때 이벤트를 fire해라. 즉, 버튼을 클릭하여 실행함.
  expect(button).toHaveStyle({backgroundColor: 'blue'}); //배경색이 블루여야 한다.
  expect(button.textContent).toBe('change to red!') //뭐가 되기(change to red)를 기대한다.
});
