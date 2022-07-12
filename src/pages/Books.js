import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

function Home() {
  const books = [
    {
      id: uuidv4(),
      title: 'A Series of Unfortunate Events',
      author: 'Egmont',
      genre: 'Drame',
      completed: '15',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      completed: '75',
    },
    {
      id: uuidv4(),
      title: 'Narnia',
      author: 'Clive Staples Lewis',
      genre: 'Science Fiction',
      completed: '35',
    },
  ];
  return (
    <>
      <BookList books={books} />
      <AddBook />
    </>
  );
}

export default Home;