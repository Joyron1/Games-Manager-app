import React from 'react';

const commentArea = (props) => {
    console.log("props:", props)
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="comment">Write a Comment:</label>
                    <textarea className="form-control" id="comment" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-primary float-right" onClick={() => props.addFN()}> Send </button>
            </form>
        </div>


    );
}

export default commentArea;