import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes/routes'
import registerServiceWorker from './registerServiceWorker'

import './styles/main.css'
import './styles/header.css'

ReactDOM.render(
    <AppRoutes />, 
    document.getElementById('root')
)

registerServiceWorker()
