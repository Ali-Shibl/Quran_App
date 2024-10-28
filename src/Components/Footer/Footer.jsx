import React from 'react';
import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${style.footer}`}>
      <div className="d-flex justify-content-around align-items-center py-3">
        <div>
          <p className='m-0'>by. Ali_Shibl</p>
        </div>
        <div>
          <p className='m-0'>&#9400; Quran</p>
        </div>
      </div>
      <div className={`${style.quote} text-center`}>
        <p className='m-0'>"إن مع العسر يسرا" - سورة الشرح</p>
      </div>
      <div className={`${style.socialIcons} text-center`}>
        <a href={'https://www.facebook.com/profile.php?id=100006448771484'} target='_blank'  rel='noopener noreferrer' className={style.icon}><i className='fa fa-brands fa-facebook'></i></a>
        <a href={'https://www.instagram.com/alii.uwk/'} target='_blank'  rel='noopener noreferrer' className={style.icon}><i className='fa fa-brands fa-instagram'></i></a>
        <a href={'https://wa.me/201143584870'} target='_blank'  rel='noopener noreferrer' className={style.icon}><i className='fa fa-brands fa-whatsapp'></i></a>    
      </div>
    </footer>
  );
}
