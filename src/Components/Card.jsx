import React, { useContext } from 'react'
import NoteContex from '../Contexts/NoteContext'
import './Card.css'
function Card({e}) {

    let context=useContext(NoteContex);
    let removeCard=context.RemoveCard;
    // let data=context.apiData
    // console.log(data);
  return (
    <div className='card'>
        <button onClick={() =>removeCard(e.id)}>❌</button>
        <h3>{e.title}</h3>
        <p>{e.body}</p>

        <img src="https://ideogram.ai/assets/image/lossless/response/gfkYNSuORZ2l0jNqoyzN7w" _alt="e"/>
    </div>
  )
}

export default Card