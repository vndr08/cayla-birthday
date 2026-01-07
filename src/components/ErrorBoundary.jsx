import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a0e1a 0%, #0f1729 50%, #050810 100%)",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
        }}>
          <div>
            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>⚠️ Oops!</h1>
            <p style={{ fontSize: "18px", marginBottom: "20px" }}>Something went wrong. Please refresh the page.</p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "12px 28px",
                background: "linear-gradient(135deg, #FACC6B, #FFD700)",
                color: "#000",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
