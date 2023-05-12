import React from 'react'
import { BrowserRouter as Rooter, Routes, Route } from 'react-router-dom'
import Login from '../containers/login.js';
export default function Router() {
  return (
    <Rooter>
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
    </Rooter>
  )
}
