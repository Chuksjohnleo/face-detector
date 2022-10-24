import React from 'react';

const Rank = ({user})=>{
    return(
<div className='rank'>
    <div>
      <p><b>{`${user.name}, Your current number of successful entries is ..`}  </b></p>
     <p>{user.entries}</p>
    </div>
</div>
    )
}
export default Rank;