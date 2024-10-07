import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function Standarlayout() {
  return (
    <>
    <header>
    <Sidebar></Sidebar>        
    </header>
    <main>
        <Outlet></Outlet>
    </main>
    <footer>
        <h2>
            <footer></footer>
        </h2>
    </footer>
    </>
  )
}
