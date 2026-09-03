import { useState } from "react";
import "./App.css";

function App() {
    const [status, setStatus] = useState("Ready");

    const handleStart = () => {
        setStatus("Starting ALS...");
    };

    return (
        <div className="app">
            <div className="dashboard">
                <h1>Automatic LeetCode Solver</h1>

                <p className="subtitle">
                    Automated LeetCode solving system
                </p>

                <div className="controls">
                    <label htmlFor="questionCount">
                        Questions
                    </label>

                    <select id="questionCount" defaultValue="random">
                        <option value="random">Random</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <button onClick={handleStart}>
                    START ALS
                </button>

                <div className="status">
                    <span>Status:</span> {status}
                </div>
            </div>
        </div>
    );
}

export default App;