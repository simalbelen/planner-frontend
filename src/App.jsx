import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home"
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/tasks" element={ <Home /> } />
                <Route path="/events" element={ <Home /> } />

                {/* Redirección a una ruta específica */}
        <Route path="*" element={<Navigate to="/not-found" />} />

        {/* Página 404 */}
        <Route path="/not-found" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
