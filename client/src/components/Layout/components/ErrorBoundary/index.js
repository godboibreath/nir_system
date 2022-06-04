import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch() {
        this.setState({ error: true });
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;
        return error ? <div>Error</div> : children;
    }
}
