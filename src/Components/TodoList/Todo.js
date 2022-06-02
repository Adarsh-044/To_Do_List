import React, { useState } from 'react'
import "./style.css"

const Todo = () => {

  const [inputData, setInputData] = useState("");   // To get the data from the user. 
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData)
      alert('Please fill the data');
    else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">

          <figure>
            <img src="/images/todo.svg" alt="ToDoLogo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems" >
            <input type="text"
              placeholder='✍ Add Item'
              className='form-control'
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value)
              }} />

            <i className="fa fa-plus" onClick={addItem}></i>
          </div>
          {/* Show Items */}
          <div className="showItems">

            {items.map((currEle, idx) => {
              return (
                <div className="eachItem" key={idx}>
                  <h3>{idx + 1} .  {currEle}</h3>
                  <div className="todo-btn">
                    <i className="fas fa-edit add-btn" ></i>
                    <i className="far fa-trash-alt add-btn"></i>
                  </div>
                </div>
              )
            })}




          </div>

          {/* Remove All */}
          <div className="showItems">
            <button className='btn effect04' data-sm-link-text="Remove All">
              <span>
                CHECK LIST
              </span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Todo