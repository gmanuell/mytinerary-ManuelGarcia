import React from 'react'
import { NavLink } from 'react-router-dom'


const routes = [

    { to: "/", text: "home"},
    { to: "/cities", text: "Cities" },

]


export default function Sidebar() {
  return (
    <div className='bg-white border-gray-200 px-4 sm:px-6 py-2.5'>

    <nav className='container flex flex-wrap items-center justify-between mx-auto'>
    <img
  src="/logo.png" 
  className="h-8 mr-3 sm:h-10"
  alt="Logo"
/>
        <ul className='flex gap-4'>
            {routes.map((r) => (
                <li 
                // key={index}
                >
                    <NavLink to={r.to} className={({isActive})=> isActive ? "text-green-500":""}>{r.text}</NavLink>
                </li>
            ))}
        </ul>
    </nav> 
            </div>
  )
}

