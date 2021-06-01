import React from 'react';

class CardData extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.state.user.name}</h1>
            </div>
        )
    }
}

export default CardData