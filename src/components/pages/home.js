import React from 'react';
import axios from 'axios';
import Book from './widgets/book';

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            allBooks: [],
            delete: false
        }

        this.getBooks = this.getBooks.bind(this);
        this.handleReload = this.handleReload.bind(this);
    }

    handleReload() {
        this.setState({
            delete: true
        });
    }

    getBooks() {
        axios.get('http://127.0.0.1:5000/book/get')
        .then(response => {
            console.log(response.data);

            this.setState({
                allBooks: response.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.getBooks();
        this.setState({
            delete: false
        });
    }

    render() {
                const userBooks = this.state.allBooks.map(book => {
                    return <div key={book.id} className = "book-map"><Book handleReload= {() => this.handleReload()}book={book}/></div>
                })

        return (
            <div className = "book-list-container">
                    {userBooks}
            </div>
        )
    }
}