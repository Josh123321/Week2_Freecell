import React from 'react';
import Card from './Card';

export const CardGroup = ({ groupData }) => {
    console.log(groupData);
    return (
        <div className="card-sequnece">
            {
                groupData && groupData.map((data, index) => { 
                    const cardInterval = index * 18;
                    const sequneceStyle = {
                        position: 'relative',
                        zIndex: index,
                        bottom: `${cardInterval}vh`
                    }
                    return (
                        <React.Fragment>
                            <Card suits={data.suit} number={data.number} style={sequneceStyle} />
                        </React.Fragment>
                    )
                })
            }
        </div>
    )

}