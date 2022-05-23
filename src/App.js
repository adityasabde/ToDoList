// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [inputlist, setinputlist] = useState("");
  const [items, setitems] = useState([]); //empty array creates in hooks

  function changeitem(e) {
    setinputlist(e.target.value);
  }

  function listitem() {
    setitems((olditems) => {
      return [...olditems, inputlist];
    });
    //  document.getElementById("task").value ="";
    setinputlist("");
  }

  const deleteitem=(id)=>{
     setitems((olditems)=>{
       return olditems.filter((arrele,index)=>{
            return index !==id;
       })
     })
  }

  return (
    <div className="App">
      <h2>TO DO LIST</h2>
      <input
        id="task"
        style={{
          borderRadius: "30px",
          height: "30px",
          width: "250px",
          fontSize: "20px",
        }}
        type="text"
        onChange={changeitem}
        value={inputlist}
      />
      <button onClick={listitem} style={btn}>
        Add
      </button>

      <ul>
        {items.map((itemval,index) => (
          <List onSelect={deleteitem} key={index} id={index} text={itemval}/>
        ))}
      </ul>
    </div>
  );
}

const btn = {
  background: "green",
  borderRadius: "10px",
  color: "white",
  height: "30px",
  width: "250px",
  cursor: "pointer",
  margin: "10px",
};

// function f(e){
//  const a = document.getElementById("task").value;
//   console.log(a);
//   arr.push(a);
//   console.log(arr);

//  addTask(userInput);
//  setUserInput(“”);

//   arr.forEach((i)=>{
//     <li>{i}</li>
//  })
// App(a);
//}
export default App;
