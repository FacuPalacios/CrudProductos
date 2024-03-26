import NavBar from './components/NavBar.jsx'
import Foot from './components/Foot.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home.jsx"
import AcercaDeNosotros from './components/pages/AcercaDeNosotros.jsx'
import Administracion from './components/pages/Administracion.jsx'
import CrearProducto from './components/pages/sections/CrearProducto.jsx'
import Editar from './components/pages/sections/Editar.jsx'
import ErrorPage from './components/pages/ErrorPage.jsx'

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
            <Route path='/crear-producto' element={<CrearProducto/>} />
            <Route path='/editar/:id' element={<Editar/>}/> {/*id: Es un parámetro y es obligatorio (clase 27 febrero) */}
            <Route path='/*' element={<ErrorPage/>}/> {/* /*: Significa que hace referencia a cualquier página que no fue escrita antes. Éste método muestra una página de error cuando ingresamos una url mal */}
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
