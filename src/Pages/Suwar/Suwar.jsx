import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import style from './Suwar.module.css'
import { Link } from 'react-router-dom';
export default function Suwar() {

  function suwar() {
    return axios.get(`https://api.alquran.cloud/v1/surah`);
  }

  const { data, error, isLoading } = useQuery('suwar', suwar);


  if (isLoading) return <div className="loader d-flex justify-content-center align-items-center"></div>;
  if (error) return <div className="text-center">An error occurred: {error.message}</div>;




  return (<>


    <Helmet>
      <meta name="description" content="القران الكريم كامل قراءه وتفسير" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <title>القران الكريم</title>
    </Helmet>
    <header>
      <h1 className='text text-center mb-0 mt-5'>المصحف الشريف</h1>
    </header>
    <main className='py-5'>
      <div className="container">
        <div className="row g-3">
          {data.data?.data?.map((surah, index) => 
            <div key={index} className=" col-sm-6 col-md-6 col-lg-3   curser">

              <div className=" d-flex flex-sm-column justify-content-around align-items-center py-3 bg-card text-center rounded-2">
                <h2 className='text mb-0 mb-md-4 h5'>{surah.name}</h2>

                <div className={`d-flex flex-sm-column flex-md-row  align-items-center   gap-3 mt-0 mt-sm-3 mt-md-0 ${style.x}`}>
                  <Link to={`/surah/${surah.number}`} className={`btn btn-outline-dark ${style.btnn}`}> قراءه</Link>
                  <Link to={`/tafser/${surah.name}/${surah.number}`} className={` btn btn-dark ${style.btnn}`}>تفسير</Link>
                </div>


              </div>



            </div>

         )}
        </div>
      </div>
    </main>



  </>

  )
}
