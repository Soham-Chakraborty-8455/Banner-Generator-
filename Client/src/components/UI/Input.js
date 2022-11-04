import React from 'react';
import classes from './Input.module.css'

function Input(props) {
    return (
        <div className={classes.inputArea}>
            <label htmlFor={props.label.for} className={classes.formLabel}>{props.labelName}</label>
            <input type={props.input.type} className={classes.formControl} id={props.input.id} placeholder={props.input.placeholder}></input>
        </div>
    )
}

export default Input