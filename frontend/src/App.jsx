import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/home"
import Hotel from "./pages/hotel/hotel"
import List from "./pages/list/list"
import Login from "./pages/login/login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
