import React, { Component } from "react";
import axios from "axios";

export default class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const post = {
            title: this.state.title
        };

        axios.post();
    }

    render() {
        return (
            null
        )
    }
}