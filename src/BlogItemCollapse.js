import React, { Component } from 'react';
import Moment from 'react-moment';
import { ListGroupItem, Collapse } from 'reactstrap';

class BlogItemCollapse extends Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse});
    }

    render() {
        const post = this.props.post;
        return (
            <ListGroupItem>
                <div className="card">
                    <div className="card-header post-header" onClick={this.toggle}>
                        <h5 className="card-title">{post.title}</h5>
                        <small className="post-date">
                            <Moment parse="YYYY-MM-DD HH:mm">
                                {post.created_date}
                            </Moment>
                        </small>
                        <small>{post.categories.title}</small>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <div className="card-body">
                            <p className="card-text">{post.text}</p>
                        </div>
                    </Collapse>
                </div>
            </ListGroupItem>
        );
    }
}

export default BlogItemCollapse