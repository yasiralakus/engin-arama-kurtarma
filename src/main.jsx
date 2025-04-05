import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Media from './Pages/Media.jsx'
import Teams from './Pages/Teams.jsx'
import Contact from './Pages/Contact.jsx'
import Donate from './Pages/Donate.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/medya',
                element: <Media />
            },
            {
                path: '/ekiplerimiz',
                element: <Teams />
            },
            {
                path: '/iletisim',
                element: <Contact />
            },
            {
                path: '/bagis-yap',
                element: <Donate />
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
