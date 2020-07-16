// Question: 2. What region is House Targaryen in?

import React, { Component } from 'react';
import axios from 'axios';

export default class SecondQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            info: [],
        })
    }

    // Calling API with axios
    componentDidMount () {
        axios.get("http://www.anapioficeandfire.com/api/houses/378")
        .then(res => {
            this.setState ({
                info: res.data.region
            })
        })
        .catch(e => {console.error(e.message)})
    }

    render() {
        return (
            <div>
                <h3>Question 2:</h3>
                <h4 className='question'>Where was Margaery Tyrell born?</h4>
                {console.log(this.state.info)}
                <p className='answer'>{ this.state.info }</p>
            </div>
        )
    }
}
