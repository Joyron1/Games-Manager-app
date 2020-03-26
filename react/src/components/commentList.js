import React from 'react';

const commentList = (props) => {
    console.log("props:", props)
    return (
        <div>
            <li className="list-group-item">{props.comment.comment}</li>
        </div>


    );
}

export default commentList;