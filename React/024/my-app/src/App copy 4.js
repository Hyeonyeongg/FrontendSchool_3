import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  // let heart = like % 2 === 1 ? 'โค๏ธ' : '';
  // let heart = like % 10 === 3 || like % 10 === 6 || like % 10 === 9 ? '๐' : '';

  let heart = ''
  for (let i of String(like)){
    if(i === '3'){
      heart = '์ง๐'
    } else if (i === '6'){
      heart = '์ง๐'
    } else if (i === '9'){
      heart = '์ง๐'
    }
  }

  // '123123'.match(/[369]/g) //์ผ์นํ์ง ์์ผ๋ฉด null๋ฐํ
  // ['3', '3']
  // let heart = String(like).match(/[369]/g)? '์ง๐' : '';

  // '123123'.split("").filter(v => v === '3' || v === '6' || v === '9')
  // ['3', '3']

  // let heart = String(like) //fillter๋ ์ผ์นํ๋ ๊ฒ์ด ์์ผ๋ฉด ๋น ๋ฐฐ์ด ๋ฐํ. []๋ true์ด๊ธฐ ๋๋ฌธ์ .lenght๋ฅผ ์ ์ด์ค ๊ฒ.
  //   .split('')
  //   .filter((v) => v === '3' || v === '6' || v === '9').length
  //   ? '์ง๐'
  //   : '';

  function handleClickLike() {
    // setLike(like + 1)
    // console.log(like);
    setLike(like + 1);
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
      <span>{heart ? heart : ''}</span>
    </div>
  );
}

function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;
