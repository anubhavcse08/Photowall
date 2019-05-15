import React from 'react';

function Photo(props) {
    const Constpost=props.photoPost
        return <figure className="figure">
            <img className="photo" src={Constpost.imageLink} alt={Constpost.description}/>
            <figcaption><p>{Constpost.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={ ()=>{
                    props.onRemove_Photo(Constpost);
                } }>Remove</button>
            </div>
        </figure>
}

export default Photo