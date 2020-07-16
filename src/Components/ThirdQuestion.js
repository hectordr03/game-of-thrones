// Question: 3. What's the coat of arms of House Lannister?

import React, { Component } from 'react';
import axios from 'axios';

export default class ThirdQuestion extends Component {
    constructor (props) {
        super (props)

        this.state = ({
            info: []
        });
    }

    componentDidMount () {
        // retrieving data (in this case a single object) from the API link
        axios.get("http://www.anapioficeandfire.com/api/houses/229")
        .then(res => {
            // setState so "info" carries the correct answer to the question
            this.setState({ info: res.data.coatOfArms })
        })
        .catch(e => console.error(e.message))

    }
    render() {
        return (
            <div>
                <h3>Question 3:</h3>
                <h4 className='question'>What's the coat of arms of House Lannister?</h4>
                {/* {console.log(this.state.info)} */}
                <p className='answer'>{ this.state.info }</p>
            </div>
        )
    }
}
