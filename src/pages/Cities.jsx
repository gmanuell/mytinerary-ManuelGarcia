import React from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import CitiesCards from '../components/Cards'


export default function Cities() {
  const navigate = useNavigate()
  function navigateBack() {
    navigate(-1)
  }

  return (
    <>
    <div className="Home">
        <div className="relative">
      
          <img
            src="https://ciudadccs.info/gestor/archivos/imagenes/blobs/fileblob221010032101.jpg"
            alt="Banner"
            className="w-full h-96 object-cover animate-zoom "
          />
          

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold mb-4">Choice your favorite City</h1>
          </div>
        </div>
        </div>
      
        <div className="relative text-white text-center">
      
          
          <CitiesCards/>
        
        
        

      </div>
    </>
  )
}
