import React, { useState } from 'react';
import './assets/style/App.sass';

import Game from './assets/js/components/Game';
import RulesModal from './assets/js/components/RulesModal';

import { motion } from 'framer-motion';

function App() {
  // rules modal state
  const [rules, setRules] = useState(false);

  return (
    <div className='App'>
      <div className='container'>
        <Game />
        {/* <Game changeScore={(value) => setScore(score + value)} /> */}
        <motion.button
          className='rules-btn'
          onClick={() => setRules(!rules)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Rules
        </motion.button>
      </div>
      {rules && <RulesModal rules={rules} setRules={setRules} />}
    </div>
  );
}

export default App;
