import React from "react";

const FaceRecognition=({imageurl,box})=>{
    return(
    <section className="genc" >
      <div className='imageContainer' >
        <img id='inputimage' alt='' src={imageurl} width='500px' />
        <div className='boundingbox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </section>
    )
}


export default FaceRecognition;