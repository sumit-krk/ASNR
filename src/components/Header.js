import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{display:'flex', justifyItems:'center', gap:'20px'}}>
       <Link to="contact">
            <div>Contact</div>
       </Link>
       <Link to="about">
            <div>About</div>
       </Link>
    </div>
  )
}

export default Header