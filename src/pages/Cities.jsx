import React from 'react'
import { useNavigate, useLocation,useParams } from 'react-router-dom'


export default function Cities() {
  const navigate = useNavigate()
  function navigateBack(){
    navigate(-1)
  }

  return (
    <>
    <div className=' inset-0 flex flex-col items-center justify-center text-white  bg-opacity-50"'>

  <h1 className="text-9xl font-bold mb-4">Ooops...</h1>
  <h2 className='text-8xl text-center my-10'>
  Page under construction
            </h2>
    <img src="https://www.lucushost.com/blog/wp-content/uploads/2018/11/como-crear-una-pagina-en-construccion.png" alt="construccion" />
    <button
    onClick={()=> navigateBack()} 
    className='p-2 my-20 bg-orange-600 rounded-lg  hover:bg-slate-600'>Go Back</button>

    </div>
    </>
  )
}
