// Question: 1. Where was Margaery Tyrell born?

import React, { Component } from 'react';
import axios from 'axios';

// API url
// const URL = "http://anapioficeandfire.com/api/characters/16"

export default class FirstQuestion extends Component {
    constructor (props) {
        super (props)

        this.state = ({
            info: []
        });
    }

    componentDidMount () {
        // retrieving data (in this case a single object) from the API link
        axios.get("http://anapioficeandfire.com/api/characters/16")
        .then(res => {
            this.setState({ info: res.data.born })
        })
        .catch(e => console.error(e.message))

    }
    render() {
        return (
            <div>
                <h3>Question 1:</h3>
                <h4 className='question'>Where was Margaery Tyrell born?</h4>
                {/* {console.log(this.state.info)} */}
                <p className='answer'>{ this.state.info }</p>
            </div>
        )
    }
}
