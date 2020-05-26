import React from 'react';

function Card({ name, email, id }) {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2 tc'>
            <img src={`https://robohash.org/${id}?size=250x250`} alt="card" />
            <>
                <h2>{name}</h2>
                <p>{email}</p>
            </>
        </div>
    );
}

export default Card;