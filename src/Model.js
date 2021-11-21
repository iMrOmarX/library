import React from "react";
import { DatePicker } from "antd";
import {useState} from "react"

function Model({showModel}) {
  const [returnDate, setreturnDate] = useState(new Date());
  return (
    <div className="model" 
        style={{
            display:(showModel)? "block": "none"
        }}
    >
      <h2>Borrow a Book</h2>

      <form>
        <label>Student Name :</label>
        <input placeholder="Ahmad Mohammad"></input>
        <label>Student ID :</label>
        <input placeholder="156456"></input>

        <label>Return Date: </label>

        <DatePicker onChange={(date) => {console.log(date)}}/>
      </form>
    </div>
  );
}

export default Model;
