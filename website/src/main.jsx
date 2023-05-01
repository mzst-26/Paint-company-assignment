import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contact from "./Components/Contact/Contact";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
       <Routes>
                <Route path= "/" element={<App/>} exact/>
                <Route path="/messages" element={<Contact/>} exact/>
       </Routes>
      </Router>
  </React.StrictMode>,
)
