import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Standarlayout() {
  return (
    <>
    <header>
    <Sidebar></Sidebar>        
    </header>
    <main className='bg-slate-600  flex-grow'>
        <Outlet></Outlet>
    </main>
    <footer>
        <h2>
            <Footer></Footer>
        </h2>
    </footer>
    </>
  )
}
