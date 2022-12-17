import React from 'react';


 const Navigation = ({ routeChange, route, isSignedIn}) => {
    if (!isSignedIn && route === 'register') {
    return(<nav className='nav' >
                  <p onClick={() => routeChange('signin')} className='f4 link blue pa1'>
                    <strong className='pointer'>Sign In</strong>
                  </p>
           </nav>)
    } else if(route === 'signin'){
        return (
            <nav className='nav'>
                <p onClick={() => routeChange('register')} className='f4 link blue pa1'>
                    <strong className='pointer'>Register</strong>
                </p>
            </nav>
        )
    } else if(route === 'profile'){
        return (
            <nav className='nav home-nav'>
                <p className='f4 link blue ma2' >
                  <strong onClick={() => routeChange('signin')}  className='pointer'> Sign Out </strong> 
                </p>
                <p onClick={() => routeChange('home')} className='f4 link blue ma2'>
                  <strong  className='pointer'>Home</strong>
                </p>
            </nav>
        )
    }else{
        return (
            <nav className='nav home-nav' >
                <p className='f4 link blue ma2' >
                  <strong onClick={() => routeChange('signin')}  className='pointer'> Sign Out </strong> 
                </p>
                <p className='f4 link blue ma2'>
                  <strong onClick={() => routeChange('profile')}  className='pointer'> Profile </strong>
                </p>
            </nav>)
    }
}
export default Navigation;