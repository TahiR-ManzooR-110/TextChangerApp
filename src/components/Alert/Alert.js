import React from 'react';

const Alert = (props) => {
    let capatalize=(word)=>{
        const l=word.toLowerCase();
        return l.charAt(0).toUpperCase() + l.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} id="alert" role="alert">
            <strong>{capatalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>

    )
}
export default Alert