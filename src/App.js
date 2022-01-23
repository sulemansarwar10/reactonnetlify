import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [mess, setmess] = useState({})
  useEffect(() => {
    fetch(`/.netlify/functions/hello?name=from Serverless Function`)
    .then(response => response.json())
    .then(data => setmess(data));



  }, [])


  return (
    <div className="App">
      <h1> This is first React app on Netlify by suleman</h1>
      <h2>{mess.message}</h2>
    </div>
  );
}

export default App;
