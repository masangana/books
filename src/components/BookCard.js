import React from 'react';
import PropTypes from 'prop-types';


function BookCard({ book }) {
  return (
    <section className="bookCardWrapper">
      <div className="bookCardContainer">
        <span className="genre">{book.genre}</span>
        <span className="title">{book.title}</span>
        <span className="author">{book.author}</span>
        <div className="options">
          <span className="comments">Comments</span>
          {' '}
          |
          <span className="remove">Remove</span>
          {' '}
          |
          <span className="edit">Edit</span>
        </div>
      </div>
      <div className="progressContainer">
        <div className="progressCircle">
          <div className="outer">
            <div className="inner" />
          </div>
        </div>

        <div className="progressPercent">
          <span className="percentComplete">
            {`${book.completed}%`}
          </span>
          <span className="completed">
            Completed
          </span>
        </div>
        <div className="line2" />
      </div>
      <div className="progressStatus">
        <span className="currentChapter">
          Current Chapter
        </span>
        <span className="currentLesson">
          Chapter 17
        </span>
        <span className="updateProgress">
          Update progress
        </span>
      </div>
    </section>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    completed: PropTypes.string,
  }).isRequired,
};

export default BookCard;