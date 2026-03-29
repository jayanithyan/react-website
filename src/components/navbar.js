import React,{usestate} from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
        <link to="/" className="navbar-logo">
        TRVL
        </link>
        </div>
    </nav>
    </>
  )
}

export default navbar
