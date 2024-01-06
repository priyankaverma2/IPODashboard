// Dashboard.js
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useTheme } from '../ThemeContext';
import stockService from './../../services/stockService';
import Loader from './Loader';

const Dashboard = () => {
    const { themeStyles } = useTheme();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchIPOData = async () => {
            setLoading(true);
            try {
                const ipoData = await stockService.getIpoData();
                setData(ipoData);
                console.log(ipoData)
            } catch (error) {
                console.error('Error fetching Stocks:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchIPOData();
    }, []);

    return (
        <div className='entire' style={themeStyles}>
            <div className="dashboard-container">
                <h1 className="dashboard-title">Explore IPO</h1>
                {loading && <Loader />}

                {error && (
                    <div className="alert alert-danger" role="alert">
                        Error: {error.message}. Please try again.
                    </div>
                )}

                {data && (
                    <div className="ipo-cards">
                        {data.map((ipo, index) => (
                            <div
                                key={index}
                                className={`ipo-card`}>

                                <h2 style={{ color: '#333', fontWeight: 'bold' }}>{ipo.companyName}</h2>
                                <p style={{ fontWeight: 'bold', color: 'grey', }}>
                                    Status: {ipo.status}
                                </p>
                                <p style={{ fontWeight: 'bold', color: 'grey' }}>Offering Date: {ipo.offeringDate}</p>
                                <p style={{ fontWeight: 'bold', color: 'grey' }}>Symbol: {ipo.symbol}</p>
                                <p style={{ fontWeight: 'bold', color: 'green' }}>
                                    Price Range: ${ipo.priceRangeLow} - ${ipo.priceRangeHigh}
                                </p>
                                <p style={{ fontWeight: 'bold', color: 'grey' }}>Volume: {ipo.volume}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
