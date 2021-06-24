import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/table.mockdata';

const headers: TableHeader[] = [
  { key: 'id', value: '#'},
  { key: 'name', value: 'Product'},
  { key: 'price', value: 'Price', right: true},
  { key: 'stock', value: 'Available Stock', right: true}
]

function App() {

  return (
    <div className="App">
      <Header title="Algastock" />
      
      <Container>
        <Table 
          headers={headers}
          data={Products}
        />

      </Container>

    </div>
  );
}

export default App;
