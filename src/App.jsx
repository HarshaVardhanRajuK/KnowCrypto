import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import CoinDisplay from "./pages/CoinDisplay/CoinDisplay"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

function App() {
  

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDisplay />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
