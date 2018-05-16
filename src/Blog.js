import React, { Component } from "react";
import BlogItemCollapse from './BlogItemCollapse';
import { Container } from 'reactstrap';
import axios from "axios";
 
class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            filteredPosts: [],
            q: '',
        };

        this.filterList = this.filterList.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(response) {
        axios.get('http://localhost:8000/post/')
        .then(response => {
            this.setState({
                posts: response.data,
                filteredPosts: response.data
            },
                () => this.filterList()
            );
        });
    }

    onChange(event) {
        const q = event.target.value.toLowerCase();
        this.setState({q}, () => this.filterList());
    }

    filterList() {
        let posts = this.state.posts;
        let q = this.state.q;

        posts = posts.filter(function(post) {
            return post.title.toLowerCase().indexOf(q) !== -1 /* || post.categories.toLowerCase().indexOf(q) != -1 */ || post.text.toLowerCase().indexOf(q) !== -1;
        });
        this.setState({filteredPosts: posts});
    }

    render() {
        const posts = this.state.filteredPosts;
        return (
            <Container>
                <input className="form-control post-search" placeholder="Search posts" value={this.state.q} type="text" onChange={this.onChange} />
                {Object.keys(posts).map((key, index) =>
                    <BlogItemCollapse key={index} post={posts[key]} />
                )}
            </Container>
        )
    }
}
 
export default Blog;