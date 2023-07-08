
import React,{useState} from "react";
import './../styles/App.css';

const Child = ({inputValue, handleInputChange}) => {

  return(
    <div className="child">
      <h2>Child Component</h2>
      <input value={inputValue} onChange={handleInputChange} />
    </div>
  )
  
}

const App = () => {
  const [inputValue, setInputValue] = useState('');

  function handleInput(e){
    setInputValue(e.target.value);
  }

  return (
    <div id="main">
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{inputValue}</p>
            <Child inputValue={inputValue} handleInputChange={handleInput} />
        </div>
    </div>
  )
}

export default App
