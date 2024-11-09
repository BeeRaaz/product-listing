import { useContext, useEffect } from "react"
import Header from "./components/Header"
import ProductListing from "./components/ProductListing"
import ThemeContext from "./context/ThemeContext"
import { Outlet } from "react-router-dom"

function App() {
  
  return (
    <>
    <Header />
    <main>
      {/* <Outlet /> */}
      <ProductListing />
    </main>
    </>
  )
}

export default App
