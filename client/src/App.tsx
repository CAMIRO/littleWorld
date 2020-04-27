import React from 'react';
import  { Test } from './components/test'
import  ReducerExample from './components/ReducerExample'



const App: React.FC = () => {
  return (
  <div>
      little World
      <Test 
        text='hello'
        person={{ firstName: "", lastName: "" }}
      />
      <ReducerExample
      />
  </div> 
    
  );
}

export default App;
