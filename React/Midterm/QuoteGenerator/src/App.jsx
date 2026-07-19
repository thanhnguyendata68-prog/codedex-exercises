import { useState } from 'react';
import QuoteGenerator from './QuoteGenerator.jsx';
import './App.css';

const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#7b61ff', '#1e90ff', '#2e8b57'];

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#f7f7f7');

  function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  }

  return (
    <div className="App" style={{ backgroundColor }}>
      <QuoteGenerator onChangeBackground={changeBackgroundColor} />
    </div>
  );
}