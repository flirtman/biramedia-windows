import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Route from './pages/Route';

const configs = {
    phone : '514.476.0669',
    email : 'victor.vremea@gmail.com',
    companyName: 'HVAC Solution Inc.',
    greatCity: 'Montreal'
};

function App() {
  return (
      <div className="App">
        <Route configs={configs}/>
      </div>
  );
}

export default App;
