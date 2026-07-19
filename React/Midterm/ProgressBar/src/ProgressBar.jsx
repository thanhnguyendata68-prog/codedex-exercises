import { useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    if (progress < 100) {
      setProgress(prevProgress => prevProgress + 10);
    }
  }
  return (
    <div>
      <h1>Progress Bar</h1>
      <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "4px" }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#007bff",
            height: "24px",
            borderRadius: "4px",
            transition: "width 0.3s ease"
          }}
        ></div>
      </div>
      <p>{progress}% Complete</p>
      <button onClick={updateProgress}
      style={{ marginTop: "15px", padding: "8px 12px", cursor: "pointer" }}>
        Increase Progress
      </button>
    </div>
  )
}