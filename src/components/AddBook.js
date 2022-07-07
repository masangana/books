import React from 'react';

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
      <span >ADD A BOOK</span>
      <form >
        <input
          type="text"
          className="inputBookTitle"
          placeholder="Book Title"
          onChange={handleInputTitle}
        />
        <input
          type="text"
          placeholder="Book Author"
          onChange={handleInputAuthor}
        />
        <button type="button" onClick={handleAddBook}>ADD BOOK</button>
      </form>
    </section>
  );
}

export default AddBook;