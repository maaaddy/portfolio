import { useState, useEffect } from 'react';
import TopBar from "./components/TopBar/TopBar.jsx";

function App() {
  const [input, setInput] = useState('');
  const [outputs, setOutputs] = useState([]);

  const fetchOutputs = async () => {
    const res = await fetch('/api/output');
    const data = await res.json();
    setOutputs(data);
  };

  useEffect(() => {
    fetchOutputs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    await fetch('/api/output', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });

    setInput('');
    fetchOutputs();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>MERN Practice: Input to Output</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Output:</h2>
      <ul>
        {outputs.map((item) => (
          <li key={item._id}>{item.input}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;