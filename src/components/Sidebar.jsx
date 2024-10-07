import React from 'react'
import { NavLink } from 'react-router-dom'

const routes = [

    { to: "/", text: "home"},
    { to: "/cities", text: "Cities" },

]


export default function Sidebar() {
  return (
    <nav className='bg-green-50'>
        <ul className='flex gap-4'>
            {routes.map((r) => (
                <li 
                // key={index}
                >
                    <NavLink to={r.to} className={({isActive})=> isActive ? "text-green":""}>{r.text}</NavLink>
                </li>
            ))}
        </ul>
    </nav> 
  )
}
