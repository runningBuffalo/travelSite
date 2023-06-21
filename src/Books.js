import ReactDOM from 'react-dom/client';
import React, {useEffect, useState} from'react';

function Books(props) {
    const [data, setData] = useState(null);
  const[books, setBooks] = useState([])
  const [fetchData, setFetch] = useState(true);

  useEffect(() => {
      if (fetchData) {
         fetch('https://jsonplaceholder.typicode.com/todos')
         .then((response) => response.json())
         .then((data) => setBooks(data));
      }
   }, [fetchData]);
    return <div>
    <h2>I am a {props.color} Car!</h2>;
    <ul>
        {books.map((book) => <li key={book.id}>{book.title}</li>)}
      </ul>
    </div>
  }
  
  export default Books;