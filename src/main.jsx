import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from '~/providers/Routes'
import { BackgroundFilter } from '~/components/BackgroundFilter'
import '@fontsource/quicksand'
import '~/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
    <BackgroundFilter />
  </React.StrictMode>,
)
