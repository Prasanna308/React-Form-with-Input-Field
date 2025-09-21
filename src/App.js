import React, { useState } from "react";

function App() {
  // State to hold input value
  const [name, setName] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setName(event.target.value); // Update state dynamically
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dynamic Input Form</h1>

      {/* Input field */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{ padding: "10px", marginTop: "20px", width: "250px" }}
      />

      {/* Display input dynamically */}
      <h2 style={{ marginTop: "20px" }}>
        Hello, {name ? name : "Stranger"}!
      </h2>
    </div>
  );
}

export default App;
