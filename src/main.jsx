import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Snowfall from 'react-snowfall'
import './index.scss'

const randomSnowCount = (min, max) => {
  Math.random() * (max - min) + min
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Snowfall style={{
      height:'100vh'
    }} 
      snowflakeCount={randomSnowCount(200, 500)}
    />
  </BrowserRouter>
)