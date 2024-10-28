import axios from 'axios';
import React, { useLayoutEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import style from './Shikh.module.css'; 

export default function Shikh() {
    const [sura, setSura] = useState([]);
    const [ayat, setAyat] = useState([]);
    const [text, setText] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [numAyah, setnumAyah] = useState(null);
    const audioRef = useRef(null);

    let { enname,arname } = useParams();

    async function handleShikh(name) {
        try {
            let { data } = await axios.get(`https://api.alquran.cloud/v1/quran/${name}`);
            setSura(data?.data?.surahs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setIsloading(false)
    }

    function clickShikh(shikh) {
        
        let { ayahs } = shikh;
        const ayatList = [];
        const textList = [];

        for (const element of ayahs) {
            ayatList.push(element.audio);
            textList.push(element.text);
        }

        setAyat(ayatList);
        setText(textList);
        setnumAyah(0); // Start from the first ayah
    }

    useLayoutEffect(() => {
        handleShikh(enname);
    }, [enname]);

    useLayoutEffect(() => {
        if (numAyah !== null && ayat.length > 0) {
            audioRef.current.src = ayat[numAyah];
            audioRef.current.play();
        }
    }, [numAyah, ayat]);

    const handleNextAyah = () => {
        if (numAyah < ayat.length - 1) {
            setnumAyah(numAyah + 1);
        } else {
            setnumAyah(null); 
        }
    };

    return (
      <>
       <Helmet>
                <meta name="description" content=" quran sound" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <title>القارئ | {arname}  </title>
            </Helmet>



            {isloading ?<div className="loader d-flex justify-content-center align-items-center"></div>
           : 
      
      <div className={`container `}>
        
           
        <main className='my-5'>


        <header>
           <h1 className="text-center h2 mb-4 text">{arname}</h1>
        </header>





        {numAyah != null  &&
         <div className={`${style.ayahscontainer}`}>
         {text.map((ayahText, index) => (


numAyah === index ?
             <p 
                 key={index} 
                 className={`${style.ayah} m-0 text-center lh-lg `}
             >
                 {ayahText}
             </p>:''
         ))}
     </div> }   
           
            <audio ref={audioRef} onEnded={handleNextAyah} controls className={`${style.audioplayer}`} />

            <div className="row my-4">
                {sura.map((shikh, index) => (
                    <div className='col-6  col-sm-4 col-md-3 col-xl-2 mb-3' key={index}>
                        <button className={`btn  btn-outline-dark w-100 ${style.btn}`} onClick={() => clickShikh(shikh)}>
                            {shikh.name}
                        </button>
                    </div>
                ))}
            </div>
        </main>
        </div>
      }
      </>
    );
}