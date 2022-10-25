import React from 'react';


 const Navigation = ({ routeChange, route, isSignedIn}) => {
    if (isSignedIn) {
        return (
        <nav className='flex nav pointer' >
            <h3 id='reg'></h3> 
            <p onClick={() => routeChange('signout')} className='f4 link dim blue underline pa3 pointer' ><b>Sign Out</b></p>
        </nav>)
    } else if(route === 'signin'){
        return (
            <nav className='flex nav pointer'>
                <p onClick={() => routeChange('register')} 
                className='f4 link dim blue underline pa3 pointer' 
                ><b>Register</b></p>
            </nav>
        )
    }else{
 return(<nav className='flex nav pointer' >
            <p onClick={() => routeChange('signin')} 
                className='f4 link dim blue underline pa3 pointer' 
                ><b>Sign In</b></p>
        </nav>)
    }
}
export default Navigation;