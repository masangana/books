import { v4 as uuidv4 } from 'uuid';
// Action Types
const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';

// Initial State
const initialState = [
  {
    item_id: uuidv4(),
    title: 'A Series of Unfortunate Events',
    author: 'Egmont',
    genre: 'Drame',
    completed: 64,
    currentLesson: 'Chapter 17',
  },
  {
    item_id: uuidv4(),
    title: 'Narnia',
    author: 'Clive Staples Lewis',
    genre: 'Science Fiction',
    completed: 8,
    currentLesson: 'Chapter 3: "A Lesson Learned"',
  },
  {
    item_id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    completed: 0,
    currentLesson: 'Introduction',
  },
];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, action.payload];
    case REMOVED_BOOK:
      return [...state.filter((el) => el.item_id !== action.payload.item_id)];
    default:
      return state;
  }
};

// Action Creators
const addBook = (obj) => ({
  type: ADDED_BOOK,
  payload: {
    item_id: uuidv4(),
    title: obj.title,
    author: obj.author,
    genre: obj.genre,
    completed: Math.floor(Math.random() * 100),
    currentLesson: `Chapter ${Math.floor(Math.random() * 15)}`,
  },
});

const remBook = (bookID) => ({
  type: REMOVED_BOOK,
  payload: {
    item_id: bookID,
  },
});

// Exports
export { addBook, remBook };
export default reducer;