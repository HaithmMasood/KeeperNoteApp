import React from "react";

function handleClick() {
    props.onDelete();
}

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}