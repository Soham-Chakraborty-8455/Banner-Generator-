import React, { useRef } from 'react';
import Input from '../UI/Input';
import classes from './NewBanner.module.css';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

function NewBanner(props) {
  const titleRef = useRef();
  const agencyNameRef = useRef();
  const phoneRef = useRef();
  const websiteRef = useRef();
  const venueRef = useRef();
  const dateRef = useRef();
  const onSubmitHandler = (e) =>{
    e.preventDefault();

  }
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.formTitle}>New Banner Form</div>
        <button className={classes.closeButton} onClick={props.closeForm}><CloseSharpIcon/></button>
        <Input 
        label={{for: 'Title'}} 
        input={{type: 'text',placeholder: 'Event Title'}}
        labelName='Event Title' ref={titleRef}/>
        <Input 
        label={{for: 'AgencyName'}} 
        input={{type: 'text',placeholder: 'Event Agency Name'}}
        labelName='Event Agency Name' ref={agencyNameRef}/>
        <Input 
        label={{for: 'Phone'}} 
        input={{type: 'text',placeholder: 'Contact Number'}}
        labelName='Contact Number' ref={phoneRef}/>
        <Input 
        label={{for: 'Venue'}} 
        input={{type: 'text',placeholder: 'Event Venue'}}
        labelName='Event Venue' ref={venueRef}/>
        <Input 
        label={{for: 'Website'}} 
        input={{type: 'text',placeholder: 'Event website'}}
        labelName='Event website' ref={websiteRef}/>
        <Input 
        label={{for: 'title'}} 
        input={{type: 'date',placeholder: 'Event Date'}}
        labelName='Event Date' ref={dateRef}/>
        <button type='submit' className={classes.button}>Submit</button>
    </form>
  )
}

export default NewBanner