import { Navigate } from 'react-router-dom';
import { useAuthData } from '../context/AuthContext';
import ProductDetail from '../pages/ProductDetail';
const PrivateRouter = () => {
    const { authenticate } = useAuthData();
    return authenticate ? <ProductDetail /> : <Navigate to={'/login'} replace />;
};

export default PrivateRouter;
