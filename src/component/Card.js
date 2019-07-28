import React,{ useEffect } from 'react';

let dragInfo = {
    seqIndex:null,
    cardIndex:null,
};
let dragTmpData = [];


const onDragStart = (e,{suits,number,cardIndex,seqArr,seqIndex,updateFunc}) => {
    dragTmpData = seqArr[seqIndex].slice(cardIndex,seqArr[seqIndex].length);
    dragInfo.seqIndex = seqIndex;
    dragInfo.cardIndex = cardIndex;
}

const onDrop = (e,{suits,number,cardIndex,seqArr,seqIndex,updateFunc}) => {
    let { seqIndex:preSeqIndex,cardIndex:preCardIndex } = dragInfo;
    if (seqIndex === preSeqIndex)
        return false;
    // 移動卡牌至新地點
    seqArr[seqIndex] = [...seqArr[seqIndex],...dragTmpData];
    // 移除拖曳卡牌
    seqArr[preSeqIndex].splice(preCardIndex,seqArr[seqIndex].length);

    updateFunc([...seqArr]);
    dragTmpData=[];
}

/**
 * 避免onDragOver,onDragEnter預設行為，Ex.禁止符號
 */
const cancelDragDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

const Card = ({suits,number,isDraggable=true,seqArr,seqIndex,cardIndex,updateFunc,...props}) => {
    let picId;
    if (suits && number) {
        picId = `card_${suits}_${number}`;
    } else if (suits) {
        picId = `suits_${suits}`;
    } else {
        picId = `card_blank`;
    }
    const picPath = `${window.location.origin}/img/cards/${picId}.png`;
    return(
        <div 
            className="card draggable-card"
            draggable={isDraggable}
            onDragStart={(e) => {onDragStart(e,{suits,number,seqArr,seqIndex,cardIndex,updateFunc})}}
            onDragOver={cancelDragDefault}
            onDragEnter={cancelDragDefault}
            onDrop={(e) => {onDrop(e,{suits,number,seqArr,seqIndex,cardIndex,updateFunc})}}
            data-role="drag-drop-container"
            {...props}
        >
            <img src={picPath} style={{width:'135px'}}/>
        </div>
    )
}

export default Card;