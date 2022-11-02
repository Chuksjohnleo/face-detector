import React from 'react';

const ImagaLinkForm = ({onInputChange,onSubmit,connections,onInputChange2})=>{
    return(
<center><div className='pa'>
          <p className='f3'>
           <b>{'This magic brain detects faces in your pictures'}</b> 
          </p>
         <div className='ip'>
            <input className='f3 pa2 w-70 center' onChange={onInputChange} type='text' name='fn' placeholder='enter image url here'/>
            <input id='filepath' className='localfile f3 pa2 w-70 center' onChange={onInputChange2} type='file' placeholder='choose from local files here'/>
            <button onClick={onSubmit} className='w-30 grow f4  bg-yellow'>Detect</button>
         </div>
        </div>
        <h1>{connections}</h1>
</center>
    )
}
export default ImagaLinkForm;