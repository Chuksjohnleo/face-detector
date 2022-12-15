import React from 'react';

const Rank = ({user})=>{
    return(
<div className='rank-container'>
    <div>
      <p className='rank'><strong>{`${user.name}, Your current number of successful entries is ..`}  </strong></p>
     <p className='rank-number'>{user.entries}</p>
    </div>
</div>
    )
}
export default Rank;