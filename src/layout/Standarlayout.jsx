import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Standarlayout() {
  return (
    <>
    <div className='bg-slate-600 h-full'>

    <header>
    <Sidebar></Sidebar>        
    </header>
    <main className='min-h-full flex-grow'>
        <Outlet></Outlet>
    </main>
    <footer>
        <h2>
            <Footer></Footer>
        </h2>
    </footer>
    </div>
    </>
  )
}
