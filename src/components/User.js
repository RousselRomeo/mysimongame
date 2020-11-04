import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import "../CSS/User.css";

const User = (props) => {


    return (
        <div className="user">

            <li >{props.title}</li>        
            <button className="user__deleteIcon" onClick={props.handleDelete}>Delete</button>
        </div>
    )
}

export default User
