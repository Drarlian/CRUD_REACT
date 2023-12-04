import { useState, useRef } from 'react'
import './App.css'
import {useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar/index.tsx';

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
