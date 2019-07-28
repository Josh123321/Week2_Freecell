import React from 'react';

const Card = ({suits,number,...props}) => {
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
        <div className="card" {...props}>
            <img src={picPath} style={{width:'135px'}}/>
        </div>
    )
}

export default Card;

