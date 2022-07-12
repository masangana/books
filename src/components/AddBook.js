import React from 'react';
import '../styles/addBook.css';

function AddBook() {
  const handleInputTitle = (e) => {

  };

  const handleInputAuthor = (e) => {

  };

  const handleAddBook = () => {
    alert('Book Added');
  };
  return (
    <section>
      <div />
      <span className='addNewBook' >ADD A BOOK</span>
      <form >
        <input
          type="text"
          className="inputBookTitle"
          placeholder="Book Title"
          onChange={handleInputTitle}
        />
        <input
          type="text"
          className='inputBookAuthor'
          placeholder="Book Author"
          onChange={handleInputAuthor}
        />
        <button type="button" className='addBook' onClick={handleAddBook}>ADD BOOK</button>
      </form>
    </section>
  );
}

export default AddBook;