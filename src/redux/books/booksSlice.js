import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Initial State
const initialState = [
    {
      item_id: uuidv4(),
      title: 'A Series of Unfortunate Events slice',
      author: 'Egmont',
      genre: 'Drame',
      completed: 64,
      currentLesson: 'Chapter 17',
    },
    {
      item_id: uuidv4(),
      title: 'Narnia',
      author: 'Clive Staples Lewis slice',
      genre: 'Science Fiction',
      completed: 8,
      currentLesson: 'Chapter 3: "A Lesson Learned"',
    },
    {
      item_id: uuidv4(),
      title: 'Dune slice',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      completed: 0,
      currentLesson: 'Preface',
    },
    {
      item_id: uuidv4(),
      title: 'His Dark Materials',
      author: 'Philip Pullman',
      genre: 'Science Fiction',
      completed: 25,
      currentLesson: 'Chapter 5: "London"',
    },
  ];

// Slice Reducer
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer: (state, action) => [...state, action.payload],
      prepare: (value) => ({
        payload: {
          ...value,
          item_id: uuidv4(),
          completed: Math.floor(Math.random() * 100),
          currentLesson: `Chapter ${Math.floor(Math.random() * 15)}`,
        },
      }),
    },
    delBook: (state, action) => [...state.filter((el) => el.item_id !== action.payload)],
  },
});

export const { addBook, delBook } = booksSlice.actions;
export default booksSlice.reducer;