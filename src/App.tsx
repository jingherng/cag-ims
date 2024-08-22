import React from 'react';
import './App.css';
import { Typography } from 'antd';
import { ItemForm } from './web/components/ItemForm';
import { SearchComponent } from './web/components/SearchComponent';

function App() {
    const { Title } = Typography;

    return (
        <div className="App">
            <Title level={2}>Inventory Management System</Title>
            <ItemForm />
            <SearchComponent />
        </div>
    );
}

export default App;
