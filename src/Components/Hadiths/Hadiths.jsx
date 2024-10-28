import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Hadiths.module.css';

export default function Hadiths() {
  const [readers] = useState([
    { name_ar: 'ابو داود', name_en: 'abu-dawud' },
    { name_ar: 'احمد', name_en: 'ahmad' },
    { name_ar: 'البخاري', name_en: 'bukhari' },
    { name_ar: 'الدارمي', name_en: 'darimi' },
    { name_ar: 'مالك', name_en: 'malik' },
    { name_ar: 'مسلم', name_en: 'muslim' },
    { name_ar: 'الترمذي', name_en: 'tirmidzi' },
    { name_ar: 'النسائي', name_en: 'nasai' },
  ]);

  return (
    <div className="row pt-5">
      <h1 className='mb-4 h3 text-center text'> اختيار راوٍ معين لتتعرف على أحاديثه </h1>
      {readers.map((reader, index) => (
        <div className="col-md-3" key={index}>
          <Link className='nav-link' to={`/hadithsayer/${reader.name_en}/${reader.name_ar}`}>
            <div className={`cursor py-2 ${style.readercard}`}>
              <h2 className='m-0 h4 text'>{reader.name_ar}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
