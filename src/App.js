import React from 'react';
import OrderTable from './components/OrderTable';
import SimpleModal from './components/CreateModal';


import './App.css';

function App (){

  return (
    <div className="App">
      <SimpleModal />
      <OrderTable />
    </div>
  );

}


export default App;
