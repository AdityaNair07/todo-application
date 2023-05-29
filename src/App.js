import React from "react";
import { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

const App = () => {
  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (inputList.length === 0) {
      return;
    }
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>
            ToDo List <i className="fa fa-check-circle" aria-hidden="true"></i>
          </h1>
          <br />
          <input
            type="text"
            placeholder="Add a task"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
            {Items.map((itemValue, index) => {
              return (
                <Todolist
                  text={itemValue}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
