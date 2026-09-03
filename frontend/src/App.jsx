import { useState } from "react";
import "./App.css";

function App() {
    const [status, setStatus] = useState("Ready");

const handleStart = async () => {
    setStatus("Starting ALS...");

    try {
        const response = await fetch("http://localhost:3000/api/als/start", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (data.success) {
            setStatus(data.message);
        } else {
            setStatus("Failed to start ALS");
        }
    } catch (error) {
        console.error(error);
        setStatus("Could not connect to backend");
    }
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