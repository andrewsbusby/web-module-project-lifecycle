import React from 'react';

class Card extends React.Component {
    componentDidMount() {
        console.log('card component did mount');
    }

    render() {
        const {users} = this.props;
        console.log(users);
        return(
            <div>
                <div className='image'>
                    <img src={users.avatar_urll} alt='user avatar'/>
                </div>
                <div className='user'>
                    <h2>{users.name}</h2>
                    <h4>Login: {users.login}</h4>
                    <h4>Followers: {users.followers}</h4>
                    <h4>Following: {users.following}</h4>
                </div>
            </div>
        )
    }
}

export default Card