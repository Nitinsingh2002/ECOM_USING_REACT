import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CustomEcomContext } from './Ecom-context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <CustomEcomContext>
      <App />
    </CustomEcomContext>

)
