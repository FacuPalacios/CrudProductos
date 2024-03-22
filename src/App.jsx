import NavBar from './components/NavBar.jsx'
import Foot from './components/Foot.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home.jsx"
import AcercaDeNosotros from './components/pages/AcercaDeNosotros.jsx'
import Administracion from './components/pages/Administracion.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* /: Cuando estoy en el inicio (google.com/), muestra el <Home/> */}
            <Route path="/acercadenosotros" element={<AcercaDeNosotros />} />
            <Route path="/administracion" element={<Administracion />} />
          </Routes>
        </main>
        <footer>
          <Foot />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
