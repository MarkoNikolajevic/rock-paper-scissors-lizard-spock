import React, { useState } from 'react';
import './assets/style/App.sass';

import ScoreHeader from './assets/js/components/ScoreHeader';
import Game from './assets/js/components/Game';

function App() {
  // score state
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <ScoreHeader score={score} setScore={setScore} />
      <Game />
      <button className='rules-btn'>Rules</button>
    </div>
  );
}

export default App;
