import axios from "axios";
import {  useLayoutEffect, useState } from "react";

export default function useFetchData(api) {



    const [Data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)

   async function getTafser(api) {
    try {
      let {data}= await axios.get(`${api}`);
      setData(data)
      
    } catch (error) {
      console.log(error);
      
      
    }
    setisLoading(false)
    
    }
    

    
useLayoutEffect(() => {
  getTafser(api) 
}, [api])



    
  return {isLoading,Data}
}
