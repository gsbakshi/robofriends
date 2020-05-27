import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(prop) {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Catching Errors</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;