import React from 'react'
import { Link } from "react-router-dom";
import './NavigationBar.css'

export default function NavigationBar() {
  return (
    <div className='container'>
        <ul>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/about'> About </Link></li>
            <li><Link to='/contact'> Contact </Link></li>
        </ul>
    </div>
  )
}
