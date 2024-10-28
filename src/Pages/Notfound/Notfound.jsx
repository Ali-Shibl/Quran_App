import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return ( 
    <>



<Helmet>
  <meta name="description" content=" خطاء في المسار"  />
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <title> خطاء في المسار</title>
</Helmet>
    
    
      <div className="d-flex flex-column justify-content-center align-items-center notfound bg-light">
      <h1 className="display-1 text-danger">404</h1>
      <p className="lead">عذرًا، الصفحة التي تبحث عنها غير موجودة.</p>
      <Link to="/home" className="btn btn-outline-dark">العودة إلى الصفحة الرئيسية</Link>
    </div>
    
    
    </>
  
  );
}
