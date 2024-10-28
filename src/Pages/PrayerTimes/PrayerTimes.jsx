import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function PrayerTimes() {
  const [date, setDate] = useState(null);
  const [prayer, setPrayer] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getDay() {
    try {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0'); 
      const day = String(now.getDate()).padStart(2, '0'); 
      const ddate = `${day}-${month}-${year}`; 

      const { data } = await axios.get(`https://api.aladhan.com/v1/timingsByCity/${ddate}?city=cairo&country=egypt`);
      setPrayer(data.data.timings);
      setDate(data.data.date);
    } catch (err) {
      console.log('Error fetching prayer times. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  useLayoutEffect(() => {
    getDay(); 

    const interval = setInterval(() => {
      const now = new Date();
      const currentDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      const fetchedDate = date ? `${date.hijri.year}-${String(date.hijri.month).padStart(2, '0')}-${String(date.hijri.day).padStart(2, '0')}` : '';

      if (currentDate !== fetchedDate) {
        getDay(); 
      }
    }, 60 * 1000); 

    return () => clearInterval(interval); 
  }, [date]);

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const formattedHours = hours % 12 || 12; 
    return `${formattedHours}:${minutes}`;
  };

  if (loading) return <div className="text-center"><h2>Loading...</h2></div>;

  return (
    <>
    <Helmet>
  <meta name="description" content=" اوقات الصلاه "  />
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <title>اوقات الصلاة</title>
</Helmet>

    
    
    <main className='my-5'>

    <div className="container ">
      <div className="text-center">
        <h1 className="display-4 text fs-1">اوقات الصلاه بتوقيت القاهره</h1>
        <h2 className="lead text">تاريخ اليوم: {date?.readable}</h2>
        <h3 className="text">اليوم {date?.gregorian?.weekday?.en}</h3>
      </div>
      
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="bg-card rounded-2 text-center">
            <div className='p-3'>
              <h4 className='text'>الفجر : {formatTime(prayer?.Fajr)}</h4>
              <h4 className='text'>الظهر : {formatTime(prayer?.Dhuhr)}</h4>
              <h4 className='text'>العصر : {formatTime(prayer?.Asr)}</h4>
              <h4 className='text'>المغرب : {formatTime(prayer?.Maghrib)}</h4>
              <h4 className='text'>العشاء : {formatTime(prayer?.Isha)}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    
    
    </>
  );
}
