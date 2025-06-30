import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import MainPage from './App';
import SearchResult from './product';


createRoot(document.getElementById('root')!).render(
  //<StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<SearchResult />} />
      </Routes>
  </BrowserRouter>
)
