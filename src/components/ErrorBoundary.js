import React, { Component } from 'react';

//Define errorboundary 
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //Static method for errors
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  //After error is thrown
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  //Display UI
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
//Alternative 
    return this.props.children;
  }
}

export default ErrorBoundary;
