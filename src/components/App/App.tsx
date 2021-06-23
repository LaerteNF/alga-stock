import React from 'react';
import Button from '../Button';
import Header from '../Header';
import './App.css';

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
      
      <div className="Container">
        <Button 
          onClick={() => window.alert('UIIU')} 
          appendIcon={<TestComponent />}
        >
          Alert
        </Button>
      </div>

    </div>
  );
}

export default App;
