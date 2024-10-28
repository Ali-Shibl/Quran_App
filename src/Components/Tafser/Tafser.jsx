import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchData from '../../Hook/useFetchData';
import { Helmet } from 'react-helmet';
import style from './Tafser.module.css'

export default function Tafser() {


    let {name,number}=useParams()


    let {isLoading,Data}=useFetchData(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${number}`)
  



    



  return (
   <>
   <Helmet>
                <meta name="description" content="read surah" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <title>{`تفسير ${name}` } </title>
            </Helmet>
  

  {isLoading?
     <div className="loader d-flex justify-content-center align-items-center"></div>
  
  :
<>
<header>
<h1 className='text-center mt-5 text h3'>تفسير {name}  </h1>
</header>

<main>
<div className='container my-5'>
  {Data&&Data.result?.map((ayah)=>
   <div key={ayah.id}>

  
    <h2 className={`bg-card text lh-lg h4 p-2 rounded-2 ${style.ayah}`}><span className='number ms-2 me-0'>{ayah.aya}</span>{ayah.arabic_text}</h2>
    <h3 className={`text h5 lh-lg ${style.tafser}`}>{ayah.translation}</h3>
  
   </div>

  )}
 </div>
</main>

</>

 
  
  }
   
   </>

  )
}
