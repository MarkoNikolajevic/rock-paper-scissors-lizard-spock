import React from 'react';

import logo from '../../img/logo-bonus.svg';

const ScoreHeader = ({ score, setScore }) => {
  return (
    <header className='score-header'>
      <div className='app-name'>
        <img src={logo} alt='game title' />
      </div>
      <div className='score-container'>
        <h3 className='score-label'>Score</h3>
        <p className='score' score={score}>
          {score}
        </p>
      </div>
    </header>
  );
};

export default ScoreHeader;
