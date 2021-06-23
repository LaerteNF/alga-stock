import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../shared/Container';
import Table from '../../shared/Table';


function App() {

  return (
    <div className="App">
      <Header title="Algastock" />
      
      <Container>
        <Table />

      </Container>

    </div>
  );
}

export default App;
