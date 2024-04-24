import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './CSS/App.css'

import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import Blog from "./Blog"
import Projects from "./Projects"
import Resume from "./Resume";


const site = import.meta.env.BASE_URL

function Layout() {
  <Header />
  <Footer />
}
//gos inside the children array.
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
  ],
  {
    basename: site,
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
