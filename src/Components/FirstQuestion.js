// Question: 1. Where was Margaery Tyrell born?

import React, { Component } from 'react';
import axios from 'axios';

// API url
const URL = "http://anapioficeandfire.com/api/characters/16"

export default class FirstQuestion extends Component {
    constructor (props) {
        super (props)

        this.state = {
            info: []
        }
    }

    componentDidMount () {
        axios.get(`${URL}`)
        .then(response => {
            this.setState ({ info: response.data.born })
        })
        .catch(e => console.error(e.message))

    }
    render() {
        return (
            <div>
                <p>The answer to question 1 is:</p>
                {
                    this.state.info.map(response => {
                        return(
                            <div className='answer'>
                                <p>{ response.born }</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
