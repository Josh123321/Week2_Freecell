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

const demoData = [{ suits: SuitType.SPADE, number: 13 }, { suits: SuitType.HEART, number: 12 }];

const demoData2 = [{ suits: SuitType.DIAMOND, number: 10 }, { suits: SuitType.CLUB, number: 11 }];

const suitArr = [SuitType.SPADE, SuitType.HEART, SuitType.DIAMOND, SuitType.CLUB];
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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
    /**
     * TODO
     * 1.隨機排序卡牌
     * 2.實作Draggable
     * 3.根據拖曳，新增、移除陣列
     */
  });
  return (
    <div className="gameWrapper" style={gameWrapperStyle}>
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

      <div className="game-block">
        <CardGroup groupData={seqArr[0]}/>
        <CardGroup groupData={seqArr[1]}/>
        <CardGroup groupData={seqArr[2]}/>
        <CardGroup groupData={seqArr[3]}/>
        <CardGroup groupData={seqArr[4]}/>
        <CardGroup groupData={seqArr[5]}/>
        <CardGroup groupData={seqArr[6]}/>
        <CardGroup groupData={seqArr[7]}/> 
      </div>

      <div className="icon-bar">


      </div>


    </div>
  );
}

export default App;
