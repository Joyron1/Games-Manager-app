import React from 'react';

const GameCard = (props) => {
    console.log("props:", props)
    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Game number {props.game.id}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{props.game.teamA} VS {props.game.teamB}</h3>
                    <p className="card-text"><h4> {props.game.scoreA}  - {props.game.scoreB}</h4></p>
                </div>
                <div className="card-footer text-muted">
                    {props.game.time.split('T')[0]}
                </div>
            </div>
        </div>


    );
}

export default GameCard;