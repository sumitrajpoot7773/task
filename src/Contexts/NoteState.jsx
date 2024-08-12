import React, { useEffect, useState } from 'react'
import NoteContex from './NoteContext'
import axios from 'axios';

function NoteState({children}) {
    let [apiData,setApiData]=useState([]);
    let [loading,setLoading]=useState(true)
    let [cnt1,setCnt1]=useState(0);
    let [cnt2,setCnt2]=useState(6);


    function GetData(){
        setTimeout(()=>{
            let url='https://jsonplaceholder.typicode.com/posts'
            axios.get(url).then((res)=>{
                // console.log(res.data);
                setApiData(res.data)
                console.log(res.data);
                setLoading(false);
            })
        },5000)
    }

    useEffect(()=>{
        GetData();
    },[]);
  
     const RemoveCard=(id)=>{
        setApiData(apiData.filter(note=>note.id!==id))
     }

  return (
     <NoteContex.Provider value={{apiData,loading,RemoveCard,cnt2,cnt1,setCnt1,setCnt2}}>
        {children}
     </NoteContex.Provider>
  )
}

export default NoteState