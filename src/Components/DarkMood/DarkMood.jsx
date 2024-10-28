import React, {  useLayoutEffect, useState } from 'react'
import style from './DarkMood.module.css'

export default function DarkMood() {

const [DarkLight, setDarkLight] = useState(getStorageMood())

function getStorageMood() {
  let mood ='light'
  if (localStorage.getItem('QuranMood') != null) {
    mood = localStorage.getItem('QuranMood')
  } 
  return mood
}
function handelDark() {
  DarkLight === 'light' ? setDarkLight('dark') : setDarkLight('light')
}

useLayoutEffect(() => {
  document.documentElement.setAttribute('mood', DarkLight)
  localStorage.setItem('QuranMood', DarkLight)
}, [DarkLight])







  return (
    <>
<div className={`overflow-hidden rounded-3 curser ${style.theme}`} onClick={handelDark}>
  {DarkLight === 'dark'?  <i className={`${style.sun} fa-solid fa-sun  position-absolute top-50 start-50 translate-middle`}></i>
  :
  <i className={`${style.moon} fa-solid fa-moon  position-absolute top-50 start-50 translate-middle`}></i> 
  
  
  
  }



</div>


    </>
  )
}
