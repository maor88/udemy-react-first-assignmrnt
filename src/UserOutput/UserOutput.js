import React from 'react';

const userOutput = (props) => {

const style = {
    fontSize:'40px',
    textDecoration:'underline'
}

    return (
        <div>
            <p style ={style }>{props.userName}</p>
            <p>{props.text_2}</p>
        </div>
    );
};

export default userOutput;