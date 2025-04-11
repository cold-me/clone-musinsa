import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MainBanner from '../components/MainBanner';
import New from '../components/New';
import Ranking from '../components/Ranking';
import TimeSale from '../components/TimeSale';

const Home = () => {
    return (
        <div>
            <div>
                <MainBanner />
                <Ranking />
                <TimeSale />
                <New />
            </div>
        </div>
    );
};

export default Home;
