import React from 'react'
import { useParams } from 'react-router-dom'
import style from './Surah.module.css'
import useFetchData from '../../Hook/useFetchData'
import { Helmet } from 'react-helmet'
export default function Surah() {

let {number}=useParams()

let {isLoading,Data}=useFetchData(`https://api.alquran.cloud/v1/surah/${number}`)



  return (
    <>

<Helmet>
                <meta name="description" content="read surah" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <title>{` قراءه ${Data?.data?.name}`} </title>
            </Helmet>

{isLoading?
     <div className="loader d-flex justify-content-center align-items-center"></div>
  
  :
  
  
  <>
<header>

<h1 className={`text text-center h3 my-5 mx-auto ${style.namesurah}`}>{Data?.data?.name}</h1>

</header>
<main>
<div className='container'>
    <div className={`${style.surah} my-5`}>

    
    {Data&&Data.data?.ayahs?.map((ayah,index)=>

      <span key={index} className='fs-4 lh-lg  text'>{ayah.text}<span className='number fs-5'>{ayah.numberInSurah }</span></span>
    
    
    
    
    
    )}
</div>
  </div>
</main>
 
  </>
  
  }
   
    
    </>
  )
}
