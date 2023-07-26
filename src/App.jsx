import { useState } from 'react'

// Write your Color component here
const Color = ({color, setSelectedColor, selected}) => {
  return (
  <div className={color === selected ? `${color} selected` : color}
         onClick={() => setSelectedColor(color)}>
         </div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">{
      <>
        <Color color="violet" setSelectedColor={setSelectedColor} selected={selectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor} selected={selectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor} selected={selectedColor}/>
      </>
      }</div>
    </div>
  );
};

export default App;
