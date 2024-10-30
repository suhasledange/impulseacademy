import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Contact from './pages/Contact.jsx'
import Blogs from './pages/Blogs.jsx'
import Blog from './pages/Blog.jsx'
import { BlogProvider } from './context/BlogProvider.jsx'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element = {<App/>}>
//       <Route path='/' element = {<Home/>}/>
//       <Route path='/courses' element = {<Courses/>}/>
//       <Route path='/about' element = {<About/>}/>
//       <Route path='/blogs' element = {<Blog/>}/>
//       <Route path='/contact' element = {<Contact/>}/>
//     </Route>
//   )
// )

  const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/courses',
          element:<Courses/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/blogs',
          element:<Blogs/>
        },
        {
          path:'/blog/:slug',
          element:<Blog/>
        },
        {
          path:'/contact',
          element:<Contact/>
        }
      ]
    }
  ])


createRoot(document.getElementById('root')).render(
    <BlogProvider>
    <RouterProvider router={router} />
    </BlogProvider>
)
