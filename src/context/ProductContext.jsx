import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const fetchData = async () => {
        const url = 'https://json-server-vercel-xi-seven.vercel.app/products';
        const response = await fetch(url);
        const data = await response.json();
        setProductList(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const newList = useMemo(() => productList.filter((item) => item?.new));
    const saleList = useMemo(() => productList.filter((item) => !item?.new && !item?.choice));
    const rankingList = useMemo(() => productList.filter((item) => item?.choice));

    return (
        <ProductContext.Provider value={{ productList, setProductList, newList, saleList, rankingList }}>
            {children}
        </ProductContext.Provider>
    );
};
const useProductData = () => useContext(ProductContext);
export { ProductProvider, useProductData };
