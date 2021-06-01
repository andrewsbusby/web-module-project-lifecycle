import React from 'react';

class FollowerCard extends React.Component {
    render() {
        const {follower} = this.props;
        return(
            <div>
                <img src={follower.avatar_url} alt='follower avatar' />
                <h3>{follower.login}</h3>
                <h3>{follower.name}</h3>
            </div>
        )
    }
}

export default FollowerCard