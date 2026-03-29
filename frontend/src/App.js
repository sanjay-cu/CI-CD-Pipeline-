import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="heading">CI/CD Pipeline Project</h1>

      <div className="box">
        <h3>Automated Testing</h3>
        <p>Runs tests on every PR</p>
      </div>

      <div className="box">
        <h3>Docker Build</h3>
        <p>Builds and pushes Docker image</p>
      </div>

      <div className="box">
        <h3>Deployment</h3>
        <p>Deploys using GitHub Actions</p>
      </div>

      <div className="box">
        <h3>Notifications</h3>
        <p>Sends Slack alerts</p>
      </div>
    </div>
  );
}

export default App;