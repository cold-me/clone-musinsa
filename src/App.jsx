import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductAll from './pages/ProductAll';
import ProductDetail from './pages/ProductDetail';
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<ProductDetail />} />
                <Route path='/products' element={<ProductAll />} />
            </Routes>
        </>
    );
}

export default App;
