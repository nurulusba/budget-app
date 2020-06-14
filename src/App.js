import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
const App = () => {
    return (
        <div className="container"> 
        <div className="app-wrapper">
            <Header />
            <Balance />
            <AddTransaction />
        </div>
        </div>
    );
};

export default App;