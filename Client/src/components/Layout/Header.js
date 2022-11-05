import React from 'react';
import classes from './Header.module.css'
import AddSharpIcon from '@mui/icons-material/AddSharp';

function Header(props) {
  
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li><button onClick={props.onPrint}>Download</button></li>
                <li><button className={classes.addBtn}onClick={props.click}><AddSharpIcon/></button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header