import React from 'react';
import axios from 'axios';


export default class Books extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            author: '',
            review: '',
            user_id: 1
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('http://127.0.0.1:5000/book/add', {
            title: this.state.title,
            author: this.state.author,
            review: this.state.review,
            user_id: this.state.user_id
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err));

        console.log('Submitted.');
    }

    handleInput(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    
    render() {
        return (
            <form className="add-book-container" onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Author' name="author" onChange={(e) => this.handleInput(e)}/>
                <input type='text' placeholder='Title' name ="title" onChange={(e) => this.handleInput(e)}/>
                <input type='text' placeholder='Review' name="review" onChange={(e) => this.handleInput(e)}/>
                <button type ='submit'>Submit</button>
            </form>
        )
    }
}