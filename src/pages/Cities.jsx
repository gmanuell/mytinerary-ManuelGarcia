import React from 'react'
import { useNavigate, useLocation,useParams } from 'react-router-dom'


export default function Cities() {
  const navigate = useNavigate()
  function navigateBack(){
    navigate(-1)
  }

  return (
    <>
    <button
    onClick={()=> navigateBack()} 
    className='p-2 bg-slate-200 hover:bg-slate-500'>Back</button>

    <h1>Cities</h1>
    </>
  )
}
