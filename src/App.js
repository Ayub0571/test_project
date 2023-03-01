import React from 'react'
import Formik from './components/blocks/block_1/Copy_2';
import Block from './components/blocks/block/Block';
import './App.css'

function App() {

  return (
    <div className='container mt-3'>
        <div className='row'>
          <div >
            <Block/>
            
            <Formik />
           
          </div>
          <div className='col-md-7'>
              
          </div>
      </div>
    </div>
  );
}

export default App;
