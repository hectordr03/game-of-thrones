// Question: 4. What is the second seat of House Baratheon?

import React, { Component } from 'react';
import axios from 'axios';

export default class FourthQuestion extends Component {
    constructor (props) {
        super (props)

        this.state = ({
            info: []
        });
    }

    componentDidMount () {
        // retrieving data (in this case a single object) from the API link
        axios.get("http://www.anapioficeandfire.com/api/houses/17")
        .then(res => {
            // setState so "info" carries the correct answer to the question
            this.setState({ info: res.data.seats[1] })
        })
        .catch(e => console.error(e.message))

    }
    render() {
        return (
            <div>
                <h3>Question 4:</h3>
                <h4 className='question'>What is the second seat of House Baratheon?</h4>
                {/* {console.log(this.state.info)} */}
                <p className='answer'>{ this.state.info }</p>
            </div>
        )
    }
}
