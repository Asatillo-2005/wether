import { Routes , Route} from "react-router-dom"
import './App.css'
import Home from "./pages/home/home.jsx"
import Movie from "./pages/movie/movie.jsx"
import Wether from "./components/wether/wether.jsx"

function App() {
  
  return (
    <>   
    <Wether/>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie" element={<Movie/>} />
      </Routes> */}
    </>
  )
}

export default App