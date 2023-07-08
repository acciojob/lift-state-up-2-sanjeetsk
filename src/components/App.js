
import React,{useState} from "react";
import './../styles/App.css';

const Comp = (props) => {
  const [text, setText] = useState('');

  return (
    <div className="parent">
      <h1>{props.parent}</h1>
      <h4>{text}</h4>
      <div className="child">
        <h2>{props.child}</h2>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div id="main">
        <Comp parent="Parent Component" child="Child Component" />
    </div>
  )
}

export default App
