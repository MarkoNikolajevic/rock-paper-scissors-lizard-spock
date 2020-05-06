import React from 'react';

import rulesImg from '../../img/image-rules-bonus.svg';

const RulesModal = ({ rules, setRules }) => {
  const modal = document.querySelector('.modal-container');
  if (rules) {
    modal.style.display = 'flex';
  }

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <img src={rulesImg} alt='rules for the game' />
      </div>
    </div>
  );
};

export default RulesModal;
