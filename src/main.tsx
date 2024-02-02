import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/login/index.tsx'
import Register from './pages/register/index.tsx'
import { AuthProvider } from './contexts/authContext.tsx'
import { Toaster } from 'sonner'
import Protected from './pages/protected-page/index.tsx'
import Public from './pages/public-page/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected children={<App/>} />,
  },
  {
    path: '/login',
    element: <Public children={<Login/>} />,
  },
  {
    path: '/register',
    element: <Public children={<Register/>} />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router}/>
        <Toaster richColors/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
