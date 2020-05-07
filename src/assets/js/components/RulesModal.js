import React from 'react';

import rulesImg from '../../img/image-rules-bonus.svg';
import close from '../../img/icon-close.svg';

const RulesModal = ({ rules, setRules }) => {
  const modal = document.querySelector('.modal-container');
  console.log(rules);
  if (rules) {
    modal.style.display = 'flex';
    // setRules(true);
  }

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <h3 className='rules'>Rules</h3>
        <img src={rulesImg} alt='game rules' />
        <button
          className='close-modal-btn'
          onClick={() => {
            modal.style.display = 'none';
            setRules(!rules);
          }}
        >
          <img src={close} alt='close button' />
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
