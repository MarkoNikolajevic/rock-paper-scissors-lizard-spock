import React, { useState } from 'react';
import './assets/style/App.sass';

import Game from './assets/js/components/Game';
import RulesModal from './assets/js/components/RulesModal';

function App() {
  // score state
  const [score, setScore] = useState(0);
  // game choice state

  // rules modal state
  const [rules, setRules] = useState(false);

  return (
    <div className='App'>
      <div className='container'>
        <Game score={score} setScore={setScore} />
        <button className='rules-btn' onClick={() => setRules(!rules)}>
          Rules
        </button>
      </div>
      <RulesModal rules={rules} setRules={setRules} />
    </div>
  );
}

export default App;
