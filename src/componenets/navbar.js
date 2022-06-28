import React from 'react'


const navbar = () =>{
 return(
<div>
     <nav classsName='ui raised very padded segment'>
        <span className = 'ui teal inverted segment'>Image Search Engine</span>
        <div className='ui right floated header'>
            <button className='ui button'><a href='/'>Home</a></button>
            <button className='ui button'><a href='/about'>About Us</a></button>
            <button className='ui button'><a href='/contact'>Contact Us</a></button>
        </div>
    </nav>
</div>
 )
}

export default navbar;