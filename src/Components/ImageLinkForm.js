import React from 'react';

const ImagaLinkForm = ({onInputChange,onSubmit,connections,onInputChange2,btn,path,changeFilepath,filename})=>{
    return(
<center>
 <div className='input-container'>
          <p className='f3'>
           <b>{'This magic brain detects faces in your pictures'}</b> 
          </p>
          <p><button onClick={changeFilepath}>{btn}</button></p>
         <div className='ip flex column center'>
           {
           path === 'link'?(
            <div className='pa2 image-link'>
                <input className='link-input pa2 ma2 center' onChange={onInputChange} type='text' name='fn' placeholder='enter image url here'/>
                <button onClick={onSubmit} className='w-40 block grow f4 detect bg-yellow'>Detect</button>
            </div>):
            <form className='pa2 file-form' onSubmit={onSubmit}>
               <input id='filepath' className='filelink-input bg-white shadow-5 pa2 ma2 center' onChange={onInputChange2} type='file'/>
               <div className='filename'>{filename.replace(/.*[\/\\]/,'')}</div>
               <input type='submit' value='submit and detect' className='block grow f4 detect bg-yellow' name='submit'></input>
            </form>
            }
         </div>
     </div>
        <div>
            <h1 className='blue f4'>Your image is shown Below</h1>
            <strong className='blue'>{connections}</strong>
        </div>
</center>
    )
}
export default ImagaLinkForm;