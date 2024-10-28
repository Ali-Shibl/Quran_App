import axios from 'axios';
import React, {useLayoutEffect, useState } from 'react';
import style from './Azkar.module.css'  
import { Helmet } from 'react-helmet'

export default function Azkar() {
  const [azkar, setAzkar] = useState([]); 
  const [Allazkar, setAllazkar] = useState({}); 

  async function getAllAzkar(term) {
    try {
      const { data } = await axios.get('https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json');
      
       setAzkar(data[term])

       setAllazkar(data)

    } catch (error) {
      console.log(error);
    }    
  }
  
  
  useLayoutEffect( () => {
    getAllAzkar('أذكار الصباح')
    

  }, []);

  const handleAzkarClick = (key) => {
   
    
    getAllAzkar(key)
  };


  return (<>


<Helmet>
  <meta name="description" content="اذكار" />
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <title>اذكار</title>
</Helmet>


    <div className='container'>

{Allazkar&&azkar ?
  <div className="row g-md-5 d-flex flex-column flex-md-row py-5">
  <div className=" col-md-4 col-xl-3 mb-4 mb-md-0 ">
  

   <div className={`d-flex  flex-row flex flex-md-column flex-wrap gap-2  align-items-center align-items-md-start ${style.boxazkar}`}>
    {Allazkar&&Object.keys(Allazkar).map((elzkr, index) => (
      <div key={index} onClick={() => handleAzkarClick(elzkr)} className='curser text  '>
     
        <h1 className={`${azkar[1]?.category === elzkr &&  `${style.active }`} ${style.elzkr } mb-0 `}>{elzkr.split(' ').slice(0,3).join(' ')}</h1>
      </div>
    ))}
    </div>


  </div>
  <div className="col-md-8 col-xl-9 ">

    {azkar &&  <h2 className={`text fw-bolder h5 mb-4 mt-md-0 position-relative  ${style.namecategory}`}>{azkar[1]?.category} </h2>}
    {azkar && (
   
     azkar.filter((x)=>x.content ).map((Azkar,index)=> <div key={index} className={`row py-2 py-md-3   ${style.dataAzkar}` }>
  
     {Azkar.content  && Azkar.content !== 'stop' &&<p className='text  m-0 lh-lg'> <span className={`${style.text} fw-bolder`}>الذكر</span> :   {Azkar.content.replace(/['\\n',]/ig,' ')}</p>}
     {Azkar.description  && Azkar.content !== 'stop'&&<p className='text m-0 mt-2'> <span className={`${style.text} fw-bolder`}>وصف</span> :  {Azkar.description}</p>}
     {Azkar.count  && Azkar.count !== 'stop'&&   <p className='text m-0 mt-2'> <span className={`${style.text} fw-bolder`}>عدد</span> :   {Math.abs(Azkar.count) }</p> }
   </div>)
    )}
  </div>
</div>

:



<div className="loader d-flex justify-content-center align-items-center"></div>


   
      }
    </div>
    </> )
}
