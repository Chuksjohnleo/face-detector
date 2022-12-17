import React from 'react';


 const Navigation = ({ routeChange, route, isSignedIn}) => {
    if (!isSignedIn && route === 'register') {
    return(<nav className='flex nav' >
                  <p onClick={() => routeChange('signin')} 
                     className='f4 link blue pa3' 
                      ><b className='pointer'>Sign In</b>
                  </p>
           </nav>)
    } else if(route === 'signin'){
        return (
            <nav className='flex nav'>
                <p onClick={() => routeChange('register')} 
                className='f4 link blue pa3' 
                ><b  className='pointer'>Register</b></p>
            </nav>
        )
    }else{
        return (
            <nav className='flex nav' >
                <h3 id='reg'></h3> 
                <p onClick={() => routeChange('signin')} className='f4 link blue pa3' ><b  className='pointer'>Sign Out</b></p>
            </nav>)
    }
}
export default Navigation;