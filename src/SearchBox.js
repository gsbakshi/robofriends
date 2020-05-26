import React from 'react';

function SearchBox() {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue br3'
                type='search'
                placeholder='Search Robots' 
            />
        </div>
    );
}

export default SearchBox;