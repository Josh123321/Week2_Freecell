import React, { useState, useEffect } from 'react';
import '../style/css/game.css';
import GameBackground from '../style/img/freecell_bg.png';
import Card from '../component/Card';
import { SuitType } from '../utils/CardConstant'; 
import { CardGroup } from '../component/CardGroup';

const gameWrapperStyle = {
  backgroundImage: `url(${GameBackground})`,
  width: '100vw'
}

const suitArr = [SuitType.SPADE, SuitType.HEART, SuitType.DIAMOND, SuitType.CLUB];
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/**
 * TODO 2019.07.29
 * 1. 檢核拖曳規則
 * 2. top-card-block 無法存放卡片
 * 3. 計時器
 * 4. 按鈕列表
 * 5. 透過redux或是context控管狀態，state不要傳遞那麼多層
 */
function App() {
  const [cardArr, setCardArr] = useState([]);
  const [seqArr, setSeqArr] = useState([]);
  // componentDidMount
  useEffect(() => {
    // 初始卡牌資訊
    if ( cardArr.length == 0) {
      for (const suit of suitArr) {
        for (const number of numberArr) {
          cardArr.push({suit,number});
        }
      }

      // 隨機排序
      for (let i = 0 ; i < cardArr.length; i++) {
        const randomIndex = Math.floor(Math.random()*cardArr.length);
        const tmpCurrentVal = cardArr[i];
        cardArr[i] = cardArr[randomIndex];
        cardArr[randomIndex] = tmpCurrentVal;
      }

      let seqMaxSize = 7;
      let tmpSeqArr = [];
      // 發牌 7777 | 6666
      for (let i= 0; i<cardArr.length; i++) {
        tmpSeqArr.push(cardArr[i]);
        if (tmpSeqArr.length == seqMaxSize) {
          seqArr.push(tmpSeqArr);
          tmpSeqArr = [];
          if (i == 27) {
            seqMaxSize = 6;
          }
        }
      }
      setCardArr([...cardArr]);
      setSeqArr([...seqArr]);
    }
  });
  return (
    <div className="gameWrapper" style={gameWrapperStyle}>
      {/* 暫放區及完成區 */}
      <div className="top-card-block">
        <Card />
        <Card />
        <Card />
        <Card />
        <div className="timer">
          <h2>TIME</h2>
          <h2>00:00</h2>
        </div>
        <Card suits={SuitType.SPADE} />
        <Card suits={SuitType.HEART} />
        <Card suits={SuitType.DIAMOND} />
        <Card suits={SuitType.CLUB} />
      </div>
      {/* 卡片區 */}
      <div className="game-block">
        {
          seqArr.map((data,index) => {
            return(<CardGroup key={index} groupData={data} seqArr={seqArr} seqIndex={index} updateFunc={setSeqArr}/>)
          })
        }      
      </div>
      {/* 功能列表 */}
      <div className="icon-bar"></div>
    </div>
  );
}

export default App;
