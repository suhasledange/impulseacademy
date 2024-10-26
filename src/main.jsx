import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/courses' element = {<Courses/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/blogs' element = {<Blog/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
