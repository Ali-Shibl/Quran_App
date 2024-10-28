import axios from 'axios';
import React, {   useLayoutEffect,  useState } from 'react'
import DetailsRadio from '../../Components/DetailsRadio/DetailsRadio';
import style from './Radio.module.css'
import { Helmet } from 'react-helmet'

export default function Test() {
    const [radio, setRadio] = useState([])
    const [radioDetails, setRadioDetails] = useState({})
    const [show, setshow] = useState(false)
    const [isloading, setisloading] = useState(true)
  
    async function getRadio() {
  
      try {
        const { data } = await axios.get('https://data-rosy.vercel.app/radio.json');
        setRadio(data.radios);
      } catch (error) {
        console.error("Error fetching radio data:", error);
        
      }
      setisloading(false);
    }
    
function handleradio(id) {
  setRadioDetails(radio[id])
  setshow(true)
}



useLayoutEffect(() => {  
getRadio()
}, [])

  return (
    <>
     
     <Helmet>
  <meta name="description" content="home quran" />
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <title>راديو</title>
</Helmet>




  
{isloading?
  <div className="loader d-flex justify-content-center align-items-center"></div>



:



<>


  <header>
  <h1 className={`text-center  h4 fw-bolder my-5 d-none d-md-block ${style.header}`}>اختر القارئ الذي تريد سماعه</h1>

  </header>

  <main>

  
<DetailsRadio show={show} setshow={setshow} radioDetails={radioDetails}/>
<div className="container">


  <div className='row g-3 pt-md-0 pt-4 pb-5'>




{radio?.map((reciter,index)=><div key={index} className='col-sm-6 col-md-4 col-lg-3 col-xl-2  curser' onClick={()=>handleradio(index)}>
   

  
<div className={`${style.reciter} position-relative overflow-hidden d-flex flex-md-column justify-content-between align-items-center`}>
<img src={reciter.img} alt={reciter.name} className={`${style.imgreciter}`}   loading="lazy"/>
   
 <div className={`${style.content}`}>
 <h2 className={`${style.headerimg} fw-bolder`}>{reciter.name}</h2>
 </div>
</div>




  

  </div>)}



  </div>
</div>
</main>

</>



}


    
    
    </>
  )
}
