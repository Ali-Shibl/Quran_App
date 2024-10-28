import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import './AllShiukh.css'
import { Link } from 'react-router-dom';

export default function AllShiukh() {
    function elquraa() {
        return axios.get(`https://api.alquran.cloud/v1/edition?format=audio&language=ar&type=versebyverse`);
    }

    const { data, error, isLoading } = useQuery('elquraa', elquraa);
    
    
    if (isLoading) return  <div className="loader d-flex justify-content-center align-items-center"></div>;
    if (error) return <div className="text-center">An error occurred: {error.message}</div>;

    return (
        <>
            <Helmet>
                <meta name="description" content="home quran" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <title> القراء</title>
            </Helmet>

            <div className="container">
                <header>
                    <h1 className="text-center mt-5 mb-0 text">قراء القران الكريم </h1>
                </header>
                <main className='py-5'>
                <div className="row g-3  ">
                    {data?.data?.data?.map((item, index) => (
                        <div className=' col-sm-6 col-md-4 col-lg-3' key={index}>
                            <div className="card  bg-card">
                                <div className="card-body text-center d-flex flex-sm-column justify-content-between align-items-center">
                                    <h2 className="card-title text  h5 mb-0 mb-sm-3">{item.name.split(' ').splice(0,3).join(' ')}</h2>
                                    <Link to={`/shikh/${item.identifier}/${item.name}`} className="btn btn-outline-dark btn-sh">
                                         تلاوه
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                </main>
                
               
            </div>
        </>
    );
}
