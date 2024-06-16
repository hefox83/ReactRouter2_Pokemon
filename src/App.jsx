import './App.css'
import Navega from './components/navbar'
 import {Route, Routes} from "react-router-dom"
 import Pokemones from './view/Pokemones'
 import Detalle from './view/Detalle'
function App() {

  return (
    <>
      <Navega/>
      <Routes>
        <Route path= "/" element={<h1>Home</h1>} />
        <Route path= "/pokemones" element={<Pokemones/>} />
        <Route path= "/pokemones/:name" element={<Detalle/>} />
      </Routes>
    </>
  )
}

export default App
