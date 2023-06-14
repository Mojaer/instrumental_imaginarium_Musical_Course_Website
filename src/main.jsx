import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Authentication/authProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import ThemeProvider from './Authentication/darkThemeProvider/ThemeProvider'
const queryClient = new QueryClient()
const queryPayment = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryPayment}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
