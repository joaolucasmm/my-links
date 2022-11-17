import React from 'react';

function Link({link, name, icon}) {
    return(
        <a className='link-box' href={link}>
            {console.log(link, " ; ", name)}
            <img src={icon} className='image' />
            <div className='link'>{name}</div>
        </a>
    );
}

export default Link;