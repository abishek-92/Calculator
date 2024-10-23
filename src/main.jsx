import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Calculatorcontext from './context/calculator_context.jsx'
import Countcontext from './context/countcontext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Calculatorcontext>
      <App />
    </Calculatorcontext>
  </StrictMode>
  ,
)
