import React from 'react';
import Button from '../../shared/Button';
import Header from '../Header';
import './App.css';
import Container from '../../shared/Container'

function TestComponent (){
  return <img width="16"
          src="https://cdn.icon-icons.com/icons2/561/PNG/512/active-search_icon-icons.com_53799.png" 
          alt="search icon"
        />
}


function App() {
  return (
    <div className="App">
      <Header title="Algastock" />
      
      <Container>
        <Button 
          onClick={() => window.alert('UIIU')} 
          appendIcon={<TestComponent />}
        >
          Alert
        </Button>
      </Container>

    </div>
  );
}

export default App;
