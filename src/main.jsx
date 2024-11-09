import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductSingle from './components/ProductSingle.jsx'
import ProductListing from './components/ProductListing.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/products",
    //     element: <ProductListing />
    //   },
    //   {
    //     path: "/products/:id",
    //     element: <ProductSingle />
    //   }
    // ]
  },
  {
    path: "/products/:id",
    element: <ProductSingle />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
