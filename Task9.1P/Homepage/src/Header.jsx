import React from 'react'
import './Header.css'

function Header (props)
{
    return <div className='header-div' ><h1 ><img src="https://img.icons8.com/color/48/000000/sheriff.png"/>{props.text}<img src="https://img.icons8.com/color/48/000000/sheriff.png"/></h1></div>
}

export default Header