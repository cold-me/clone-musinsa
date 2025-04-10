import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import New from '../components/New';
import TimeSale from '../components/TimeSale';
import { useProductData } from '../context/ProductContext';

const Home = () => {
    const { productList } = useProductData();
    const [saleList, setSaleList] = useState([]);
    const [newList, setNewList] = useState([]);
    const getNewList = (list) => list.filter((item) => item?.new);
    const getSaleList = (list) => list.filter((item) => !item?.new);

    useEffect(() => {
        if (productList && productList.length > 0) {
            setNewList(getNewList(productList));
            setSaleList(getSaleList(productList));
        }
    }, [productList]);

    return (
        <div className='margin-4rem'>
            <New newList={newList} />
            <TimeSale saleList={saleList} />
        </div>
    );
};

export default Home;
