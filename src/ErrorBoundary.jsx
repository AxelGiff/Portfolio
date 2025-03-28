import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Portfolio error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container" style={{ 
          padding: '10px',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.8)',
          borderRadius: '5px',
          zIndex: 9999,
          color: 'white',
          fontSize: '12px',
          maxWidth: '200px',
          backdropFilter: 'blur(5px)'
        }}>
          <p>Une erreur est survenue</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '5px 10px',
              backgroundColor: '#387ADF',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '11px'
            }}
          >
            Recharger
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
