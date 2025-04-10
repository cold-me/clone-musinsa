import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const fetchData = async () => {
        const url = 'https://json-server-vercel-xi-seven.vercel.app/products';
        const response = await fetch(url);
        const data = await response.json();
        setProductList(data);
        console.log('object', data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <ProductContext.Provider value={{ productList, setProductList }}>{children}</ProductContext.Provider>;
};
const useProductData = () => useContext(ProductContext);
export { ProductProvider, useProductData };
