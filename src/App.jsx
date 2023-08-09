import { Routes , Route} from "react-router-dom"
import './App.css'
import Home from "./pages/home/home.jsx"
import Movie from "./pages/movie/movie.jsx"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie" element={<Movie/>} />
      </Routes>
    </>
  )
}

export default App
