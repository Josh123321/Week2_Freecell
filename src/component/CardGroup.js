import React from 'react';
import Card from './Card';

export const CardGroup = ({ groupData,seqArr,seqIndex,updateFunc }) => {
    return (
        <div className="card-sequnece">
            {
                groupData.length >  0 ? groupData.map((data, index) => { 
                    const cardInterval = index * 135;
                    const sequneceStyle = {
                        position: 'relative',
                        zIndex: index,
                        bottom: `${cardInterval}px`
                    }
                    return (
                        <React.Fragment key={index}>
                            <Card suits={data.suit} number={data.number} cardIndex={index} seqIndex={seqIndex} seqArr={seqArr} style={sequneceStyle} updateFunc={updateFunc}/>
                        </React.Fragment>
                    )
                }) :
                <Card isDraggable={false} cardIndex={0} seqIndex={seqIndex} seqArr={seqArr} updateFunc={updateFunc}/>                
            }
        </div>
    )

}