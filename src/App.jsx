import { useContext, useState } from 'react'
import './App.css'

import Calculator_context from './context/calculator_context'
import Calculator from './pages/calculator';
import Test from './test';

function App() {
 
  return (
    <>
    <Calculator />
    {/* <Test /> */}
    </>
  )
}

export default App;
