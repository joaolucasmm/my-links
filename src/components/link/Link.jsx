import React from 'react';

function Link({link, name, icon, alt_text}) {
    return(
        <a className='link-box' href={link}>
            <img src={icon} className='image' alt={alt_text}/>
            <div className='link'>{name}</div>
        </a>
    );
}

export default Link;