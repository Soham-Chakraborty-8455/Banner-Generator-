import classes from './Banners.module.css';
import SendIcon from '@mui/icons-material/Send';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import InsertLinkSharpIcon from '@mui/icons-material/InsertLinkSharp';
import React from 'react'

const Banners = React.forwardRef((props,ref) => {
  return (
    <div className={classes.BannerArea} ref={ref}>
      <div className={classes.logoArea}>
        <div className={classes.logo}>
          <SendIcon className={classes.logoIcon} />
          {props.details.agencyName}
        </div>
      </div>
      <div className={classes.eventTitle}>{props.details.title}</div>
      <div className={classes.triangleRight} />
      <div className={classes.parallelogram} />
      <div className={classes.parallelogram1} />
      <div className={classes.detailsArea}>
        <div className={classes.venueArea}><div className={classes.venueLogo}>Venue</div><div className={classes.venue}>{props.details.venue}</div></div>
        <div className={classes.dateArea}><div className={classes.dateLogo}>Date</div><div className={classes.date}>{props.details.date}</div></div>
      </div>
      <div className={classes.imageArea}></div>
      <div className={classes.callArea}><CallSharpIcon className={classes.call} /><div className={classes.phoneNumber}>{props.details.phone}</div></div>
      <div className={classes.website}><InsertLinkSharpIcon className={classes.link} /><div className={classes.websiteName}>{props.details.website}</div></div>
    </div >
  )
})

export default Banners