import React from 'react';
import ColorPicker from './Colorpicker';
import './App.css';
const App = () => {
  const colors = ["red", "blue", "green", "yellow", "orange", "violet" , "lightgreen" , "skyblue" , "fuchsia" , "gray" ,"navy" , "olive" , "purple", "silver" , "teal" ];

  return (
    <div>
      <div className='outercontainer'>
      <h1>Color Picker</h1>
      </div>
      <div className='innercontainer'>
      <ColorPicker colors={colors} />
      </div>
    </div>
  );
};

export default App;






