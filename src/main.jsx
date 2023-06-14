import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Authentication/authProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
const queryPayment = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryPayment}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
