import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import New from './components/New';
import Ranking from './components/Ranking';
import SideBar from './components/SideBar';
import TimeSale from './components/TimeSale';
import Brand from './pages/Brand';
import Home from './pages/Home';
import Login from './pages/Login';
import My from './pages/My';
import ProductAll from './pages/ProductAll';
import PrivateRouter from './router/PrivateRouter';
function App() {
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);
    useEffect(() => {
        console.log('sidebar 작동', isOpenSideBar);
    }, [isOpenSideBar]);
    return (
        <>
            {isOpenSideBar ? <SideBar setIsOpenSideBar={setIsOpenSideBar} /> : ''}
            <Navbar isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products' element={<ProductAll />} />
                <Route path='/product/:id' element={<PrivateRouter />} />
                <Route path='/ranking' element={<Ranking />} />
                <Route path='/sale' element={<TimeSale />} />
                <Route path='/new' element={<New />} />
                <Route path='/my' element={<My />} />
                <Route path='/brand' element={<Brand />} />
                <Route path='/shoes-festival' element={<Brand />} />
                <Route path='/summer-coupon' element={<Brand />} />
            </Routes>
        </>
    );
}

export default App;
