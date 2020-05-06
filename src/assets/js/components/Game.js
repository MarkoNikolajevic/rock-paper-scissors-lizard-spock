import React from 'react';

import paper from '../../img/icon-paper.svg';
import rock from '../../img/icon-rock.svg';
import scissors from '../../img/icon-scissors.svg';
import lizard from '../../img/icon-lizard.svg';
import spock from '../../img/icon-spock.svg';

const Game = () => {
  return (
    <div className='game-container'>
      <div className='external-border' id='scissors'>
        <div className='inner-content'>
          <img src={scissors} alt='scissors' />
        </div>
      </div>
      <div className='external-border' id='paper'>
        <div className='inner-content'>
          <img src={paper} alt='paper' />
        </div>
      </div>
      <div className='external-border' id='spock'>
        <div className='inner-content'>
          <img src={spock} alt='spock' />
        </div>
      </div>
      <div className='external-border' id='rock'>
        <div className='inner-content'>
          <img src={rock} alt='rock' />
        </div>
      </div>
      <div className='external-border' id='lizard'>
        <div className='inner-content'>
          <img src={lizard} alt='lizard' />
        </div>
      </div>
    </div>
  );
};

export default Game;
