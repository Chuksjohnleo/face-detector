import React from "react";

const FaceRecognition=({imageurl, box})=>{
    return(
    <section className="genc" >
      <div className='imageContainer' >
        <div className="flex im">
          <div className="flex"> <img id='inputimage' className="absolut" alt='' src={imageurl} /></div>
          <div className="boundingbox-container flex"><div className='boundingbox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div></div>
        </div>
      </div>
    </section>
    )
}


export default FaceRecognition;