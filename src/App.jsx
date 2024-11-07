import { useContext, useEffect } from "react"
import Header from "./components/Header"
import ProductListing from "./components/ProductListing"
import ThemeContext from "./context/ThemeContext"

function App() {
  
  return (
    <>
    <Header />
    <main>
      <ProductListing />
    </main>
    </>
  )
}

export default App
