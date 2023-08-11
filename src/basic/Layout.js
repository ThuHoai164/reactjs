import { Outlet, Link } from "react-router-dom";

import React from 'react'

export default function Layout() {
  return (
    <>
       <div className='Menu'>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/countries">Countries</Link>
            </div>
       </div>
  
        <Outlet />
    </>
  )
}
