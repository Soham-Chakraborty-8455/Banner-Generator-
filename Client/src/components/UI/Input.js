import React from 'react';
import classes from './Input.module.css'

const Input =React.forwardRef( (props,ref) =>  {
    return (
        <div className={classes.inputArea}>
            <label htmlFor={props.label.for} className={classes.formLabel}>{props.labelName}</label>
            <input type={props.input.type} className={classes.formControl} id={props.input.id} value={props.input.value} placeholder={props.input.placeholder} ref={ref}/>
        </div>
    )
})

export default Input