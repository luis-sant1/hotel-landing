import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css';
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './components/context/AuthContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </AuthProvider>

)
