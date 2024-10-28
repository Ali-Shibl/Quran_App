import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResponsivePagination from 'react-responsive-pagination';
import './HadithSayer.css'
import { Helmet } from 'react-helmet';


export default function HadithSayer() {

let {nameen,namear}=useParams()
console.log(nameen);

const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState();
const [isLoading, setisLoading] = useState(true);
const [Data, setData] = useState([]);


async function getHadiths(reader,numPage) {
   try {

    let {data}=await axios.get(`https://hadis-api-id.vercel.app/hadith/${reader}?page=${numPage}&limit=200`)
    setCurrentPage(data?.pagination?.currentPage)
    setTotalPages(data?.pagination?.totalPages)
    setData(data.items)
    console.log(data.items);
    
   } catch (error) {
    console.log(error);
    
    
   }
   setisLoading(false)

}

useLayoutEffect(() => {
getHadiths(nameen,currentPage)
}, [nameen,currentPage])

if (isLoading) return  <div className="loader d-flex justify-content-center align-items-center"></div>;

  return (
<>

<Helmet>
  <meta name="description" content="احاديث"  />
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <title>رواه {namear}</title>
</Helmet>


<main className='py-5'>
<div className="container ">

<header className='mb-4 mb-md-5'>
<h1 className='text-center  text h2'>{namear}</h1>
</header>

{Data.map((hadith,index)=><div key={index}>
    
<p className='h5 mb-3 lh-lg text texthadiht'><span className='text-success'>{hadith.number}</span> / {hadith.arab}</p>

</div>)}    
</div>



<ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
       />

</main>
</>    
)
}
