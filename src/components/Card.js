import React from 'react';

const Card = ({name, email, id, username}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow">
            <p className="ttc tr f2 b i navy">{username}</p>
            <img alt='Robots' src={`
            https://robohash.org/${id}?200x200`} />
            <div>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
        </div>
    );
}

export default Card;
