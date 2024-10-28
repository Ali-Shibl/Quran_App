import React, {  useRef } from 'react'
import img from '../../assets/xx.webp'
import style from './DetailsRadio.module.css'


export default function DetailsRadio({show,setshow,radioDetails}) {
    const audioRef = useRef(null);
    
function closeRadio() {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setshow(false);
  }

  return (
    <>
    
    <section className={` ${show?`${style.show}`:''} ${style.box}   `}>
      <span onClick={closeRadio} className='curser position-absolute top-0 end-0 fs-5  p-2  d-none d-md-block'><i className="fa-solid fa-xmark"></i></span>

     <div className=' row  align-items-center flex-column-reverse flex-md-row p-3 g-md-3 g-0'>
     
     <div className='col-md-8 col-lg-9 '>
              <p className='text-center text-md-end me-0 me-md-4 my-2 my-md-3 '>   {show?radioDetails.name:'اختر الاذاعه التي تريد سماعها'}   {show&&   <button onClick={closeRadio} className=' btn btn-light d-md-none d-inline-block me-3 curser '>الغاء</button>} </p>
{show&&     <audio ref={audioRef}  src={radioDetails?.url}  aria-label={`Playing audio for ${radioDetails.name}`}  controls autoPlay  className={` m-auto d-block ${style.audio}`}></audio>
}

     </div>
     <div className='col-md-4 col-lg-3 d-flex justify-content-center'>
     <img className={`${style.imgperson} rounded-circle `} src={show?radioDetails.img:img} alt={show?radioDetails.name:'صوره القارئ'}/>
     </div>

     </div>

    

   </section>
    </>
  )
}
