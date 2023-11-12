import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import NotFound from './pages/NotFound/NotFound';
import PlannerPage from './pages/PlannerPage/PlannerPage';

const App = () => {
  
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/planner" element={ <PlannerPage /> } />
                <Route path="/tasks" element={ <HomePage /> } />
                <Route path="/events" element={ <HomePage /> } />

                {/* Redirección a una ruta específica */}
        <Route path="*" element={<Navigate to="/not-found" />} />

        {/* Página 404 */}
        <Route path="/not-found" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
