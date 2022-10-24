import React from 'react';


const Navigation = ({ routeChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
        <nav className='flex nav pointer' >
            <p onClick={() => routeChange('signout')} className='f4 link dim blue underline pa3 pointer' ><b>Sign Out</b></p>
        </nav>)
    } else {
        return (
            <nav className='flex nav pointer'>
                {/* <p onClick={admin} >Profile</p> */}
                <p onClick={() => routeChange('signin')} 
                className='f4 link dim blue underline pa3 pointer' 
                ><b>Sign In</b></p>
                <p onClick={() => routeChange('register')} 
                className='f4 link dim blue underline pa3 pointer' 
                ><b>Register</b></p>
            </nav>
        )
    }
}
export default Navigation;