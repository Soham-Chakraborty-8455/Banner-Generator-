import React, { useRef, useState } from 'react';
import Input from '../UI/Input';
import classes from './NewBanner.module.css';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

function NewBanner(props) {
  const [formData, setFormData] = useState({});
  const titleRef = useRef();
  const agencyNameRef = useRef();
  const phoneRef = useRef();
  const websiteRef = useRef();
  const venueRef = useRef();
  const dateRef = useRef();
  const sendData = async () => {
    const Response = await fetch('/', {
      method: 'POST',
      body: JSON.stringify({
        agencyName: agencyNameRef.current.value,
        date: dateRef.current.value,
        phone: phoneRef.current.value,
        title: titleRef.current.value,
        venue: venueRef.current.value,
        website: websiteRef.current.value
      }),
      headers: { "Content-type": "application/json" }
    })

    if (!Response.ok) {

    }
  }
  const onSubmitHandler = () => {
    setFormData()
    sendData(formData);
    setFormData({
      agencyName: "",
      date: "",
      phone: "",
      title: "",
      venue: "",
      website: ""
    })
    props.closeForm();
  }
  return (
    <form className={classes.form}>
      <div className={classes.formTitle}>New Banner Form</div>
      <button className={classes.closeButton} onClick={props.closeForm}><CloseSharpIcon /></button>
      <Input
        label={{ for: 'title' }}
        input={{ type: 'text',value: formData.title, placeholder: 'Event Title', id: 'title' }}
        labelName='Event Title' ref={titleRef} />
      <Input
        label={{ for: 'agencyName' }}
        input={{ type: 'text',value: formData.agencyName, placeholder: 'Event Agency Name', id: 'agencyName' }}
        labelName='Event Agency Name' ref={agencyNameRef} />
      <Input
        label={{ for: 'phone' }}
        input={{ type: 'text',value: formData.phone, placeholder: 'Contact Number', id: 'phone' }}
        labelName='Contact Number' ref={phoneRef} />
      <Input
        label={{ for: 'venue' }}
        input={{ type: 'text',value: formData.venue, placeholder: 'Event Venue', id: 'venue' }}
        labelName='Event Venue' ref={venueRef} />
      <Input
        label={{ for: 'website' }}
        input={{ type: 'text',value: formData.website, placeholder: 'Event website', id: 'website' }}
        labelName='Event website' ref={websiteRef} />
      <Input
        label={{ for: 'date' }}
        input={{ type: 'date',value: formData.date, placeholder: 'Event Date', id: 'date' }}
        labelName='Event Date' ref={dateRef} />
      <button type='submit' className={classes.button} onClick={onSubmitHandler}>Submit</button>
    </form>
  )
}

export default NewBanner