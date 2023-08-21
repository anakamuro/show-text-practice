import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  const [showText, setShowText] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [textColor, setTextColor] = useState('black')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <div className="App">
      <button onClick={()=> setShowText(!showText)}>
         Show/Hide
      </button>
      {showText && <h1 style={{color: textColor}}>Hi my name is Aki</h1>}
      <input type="text" onChange={handleInputChange}/>
      {inputValue}
      <button onClick={()=> {setTextColor(textColor === "black" ? "red" : "black")}}>Red Color</button>
    </div>
  );
}

export default App;
