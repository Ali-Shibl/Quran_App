import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Hadiths from '../../Components/Hadiths/Hadiths'
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>


<Helmet>
  <meta name="description" content="الصفحه الرئيسيه"  />
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <title>الصفحه الرئيسيه</title>
</Helmet>


      <header className='header'>
        <div className="header-content">
          <h1 className='h2'>مرحبا بكم في تطبيق القرآن الكريم</h1>
          <p  className=' mb-0 mt-2  fs-6'>استمتع بقراءة وتفسير القرآن الكريم</p>
        </div>
      </header>
      <main className='my-5'>

      
      <div className="container ">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
         
            <div className="bg-card text-center text rounded">
              <div className="p-3">
                <h2 className='h3'> القراءة</h2>
                <p className="my-3">استمتع بقراءة وتفسير سور القرآن الكريم.</p>
                <Link to="/suwar" className="btn btn-outline-dark">ابدأ القراءة</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
           
            <div className="bg-card text-center text rounded">
              <div className="p-3">
                <h2 className='h3'> الراديو</h2>
                <p className="my-3">استمع إلى القراء المفضلين لديك.</p>
                <Link to="/radio" className="btn btn-outline-dark">استمع الآن</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
           
            <div className="bg-card text-center text rounded">
              <div className="p-3">
                <h2 className='h3'> الأذكار</h2>
                <p className="my-3">تذكر الله مع أذكار الصباح والمساء.</p>
                <Link to="/azkar" className="btn btn-outline-dark">اكتشف الأذكار</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="bg-card text-center text rounded">
              <div className="p-3">
                <h2 className='h3'>أوقات الصلاة</h2>
                <p className="my-3">تحقق من أوقات الصلاة  .</p>
                <Link to="/prayertimes" className="btn btn-outline-dark">اعرف الأوقات</Link>
              </div>
            </div>
           
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="bg-card text-center text rounded">
              <div className="p-3">
                <h2 className='h3'>شيوخ القرآن</h2>
                <p className="my-3">استمع إلى القراء المتميزين.</p>
                <Link to="/shiukh" className="btn btn-outline-dark">استمع للقراء</Link>
              </div>
            </div>
          </div>
         
        </div>

        <Hadiths/>
        
     
      </div>


      </main >
    </>
  );
}

