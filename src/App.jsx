import React from 'react'
import {  createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import Radio from './Pages/Radio/Radio'
import Azkar from './Pages/Azkar/Azkar'
import Shikh from './Components/Shikh/Shikh'
import AllShiukh from './Pages/AllShiukh/AllShiukh'
import { QueryClient, QueryClientProvider } from 'react-query'
import Suwar from './Pages/Suwar/Suwar'
import Surah from './Components/Surah/Surah'
import Tafser from './Components/Tafser/Tafser'
import PrayerTimes from './Pages/PrayerTimes/PrayerTimes'
import HadithSayer from './Components/HadithSayer/HadithSayer'
import Notfound from './Pages/Notfound/Notfound'



export default function App() {

let clint=new QueryClient()


const routers=createHashRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Navigate to={'home'}/>},
    {path:'home',element:<Home/>},
    {path:'radio',element:<Radio/>},
    {path:'azkar',element:<Azkar/>},
    {path:'hadithsayer/:nameen/:namear',element:<HadithSayer/>},
    {path:'prayertimes',element:<PrayerTimes/>},
    {path:'suwar',element:<Suwar/>},
    {path:'surah/:number',element:<Surah/>},
    {path:'tafser/:name/:number',element:<Tafser/>},
    {path:'shiukh',element:<AllShiukh/>},
    {path:'shikh/:enname/:arname',element:<Shikh/>},
    {path:'*',element:<Notfound/>},
   
  ]}
])


  return (
   <>
   <QueryClientProvider client={clint}>
 <RouterProvider router={routers}/>
   </QueryClientProvider>
   
     
    
   
   
   </>
  )
}
