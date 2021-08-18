import React from 'react';
import axios from 'axios';

const Book = props => {
    const { id, title, author, review } = props.book;

    const handleDelete = (event) => {
        axios.delete(`http://127.0.0.1:5000/book/delete/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        props.handleReload();
    }

    return (
        <div key ={id}>
            <div className = 'book-item'>
                <div className = 'book-field'>
                    Author: {author}
                </div>

                <div className = 'book-field'>
                    Title: {title}
                </div>

                <div className = 'book-field'>
                    Review: {review ? review : 'No Review'}
                </div>

                <div className ="book-btns">
                    <button className="edit">Edit</button>
                    <button className="delete" onClick={(e) => handleDelete(e)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Book;