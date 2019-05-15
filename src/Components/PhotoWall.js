import React from 'react';
import Photo from './Photo';

function PhotoWall(props) {
    return <div className="photoGrid">
                    {props.photoWallPost.map((postss, index) => <Photo key={index} photoPost={postss} onRemove_Photo={props.onRemovePhoto}/>)}
               </div>
}

export default PhotoWall