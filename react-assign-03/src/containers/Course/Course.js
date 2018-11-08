import React, { Component } from 'react';

class Course extends Component {

    render () {
        const courseTitle = decodeURIComponent(this.props.location.search).replace('?title=', '');
        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;