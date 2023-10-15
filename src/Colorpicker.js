// import React, { useState } from 'react';
// import './Colorpicker.css';

// const ColorPicker = ({ colors }) => {
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [showColorList, setShowColorList] = useState(false);

//   const handleButtonClick = () => {
//     setShowColorList(!showColorList);
//   };

//   const handleColorClick = (color) => {
//     setSelectedColor(color);
//     setShowColorList(false);
//   };

//   return (
//     <div className="ColorPicker">
//       <div className="innercontainer" style={{ backgroundColor: selectedColor }}>
//         <button className="button-container" onClick={handleButtonClick}>
//           Pick a color
//         </button>
//         {showColorList && (
//           <div className="color-list">
//             {colors.map((color, index) => (
//               <div
//                 key={index}
//                 className="color-item"
//                 style={{ backgroundColor: color }}
//                 onClick={() => handleColorClick(color)}
//               ></div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ColorPicker;

import React, { useState } from 'react';
import './Colorpicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="ColorPicker">
      <div className="innercontainer" style={{ backgroundColor: selectedColor }}>
        <button className="button-container" onClick={handleButtonClick}>
          Pick a color
        </button>
        {showColorList && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
