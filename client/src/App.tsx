import React from 'react';
import  { Test } from './components/test'



const App: React.FC = () => {
  return (
  <div>
      little World
      <Test 
        text='hello'
        person={{ firstName: "", lastName: "" }}
        handleChange={() => console.log('from App')}
      />
      
  </div> 
    
  );
}

export default App;
