
import './App.css';
import React, {useState, useEffect} from 'react';
import BookCard from './BookCard';
import { Link } from "react-router-dom";
import Model from './Model';
import 'antd/dist/antd.css';


function App() {

  let [books, setBooks] = useState([])
  const [showModel, setshowModel] = useState(false)

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/books?_quantity=15")
    .then(response => response.json())
    .then(data =>  {
      setBooks(data.data);
      console.log(books)
    })
  },[])

  return (
    <div className="app">
      <header className="App-header">
        <h1 id="title">Library System</h1>

        <div id="nav">
          <Link to="/">Books</Link> |
          <Link to="borrowed">Borrowed Books</Link> 
        </div>

        <div><b>Date :</b> {new Date().toLocaleString()}</div>

      </header>

      <section id="content">
        <div id="books-list">
          
          {
            books.map((book , index) => {
              return <BookCard book={book} key={"book-card-" + index} setshowModel={setshowModel}/>
            })
          }
        </div>

      </section>

      <Model showModel={showModel}/>
    </div>

    
  );
}

export default App;
