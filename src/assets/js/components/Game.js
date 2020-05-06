import React, { Fragment, useEffect } from 'react';

import logo from '../../img/logo-bonus.svg';
import paper from '../../img/icon-paper.svg';
import rock from '../../img/icon-rock.svg';
import scissors from '../../img/icon-scissors.svg';
import lizard from '../../img/icon-lizard.svg';
import spock from '../../img/icon-spock.svg';

const Game = ({ score, setScore }) => {
  // const [choice, setChoice] = useState(undefined);
  const choices = ['scissors', 'paper', 'spock', 'rock', 'lizard'];
  let userChoice = undefined;
  let punteggio = 0;

  // computer choice
  const computerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  // add event for all choices
  useEffect(() => {
    const moves = document.querySelectorAll('.choices-options');
    moves.forEach((move) => {
      move.addEventListener('click', () => {
        userChoice = move.getAttribute('data-choice');

        checkWinner();
      });
    });
  });

  // update score
  const updateScore = (value) => {
    setScore(score + value);
  };

  // check winner
  const checkWinner = () => {
    const computerSelected = computerChoice();

    if (userChoice === computerSelected) {
      // draw
    } else if (
      (userChoice === 'scissors' &&
        (computerSelected === 'paper' || computerSelected === 'lizard')) ||
      (userChoice === 'paper' &&
        (computerSelected === 'rock' || computerSelected === 'spock')) ||
      (userChoice === 'rock' &&
        (computerSelected === 'scissors' || computerSelected === 'lizard')) ||
      (userChoice === 'lizard' &&
        (computerSelected === 'spock' || computerSelected === 'paper')) ||
      (userChoice === 'spock' &&
        (computerSelected === 'scissors' || computerSelected === 'rock'))
    ) {
      // user win
      updateScore(1);
    } else {
      // user lose
      updateScore(-1);
    }
  };

  return (
    <Fragment>
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

      <div className='game-container'>
        <main className='main-view'>
          <div
            className='external-border choices-options'
            id='scissors'
            data-choice='scissors'
          >
            <div className='inner-content'>
              <img src={scissors} alt='scissors' />
            </div>
          </div>
          <div
            className='external-border choices-options'
            id='paper'
            data-choice='paper'
          >
            <div className='inner-content'>
              <img src={paper} alt='paper' />
            </div>
          </div>
          <div
            className='external-border choices-options'
            id='spock'
            data-choice='spock'
          >
            <div className='inner-content'>
              <img src={spock} alt='spock' />
            </div>
          </div>
          <div
            className='external-border choices-options'
            id='rock'
            data-choice='rock'
          >
            <div className='inner-content'>
              <img src={rock} alt='rock' />
            </div>
          </div>
          <div
            className='external-border choices-options'
            id='lizard'
            data-choice='lizard'
          >
            <div className='inner-content'>
              <img src={lizard} alt='lizard' />
            </div>
          </div>
        </main>

        <div className='match-view'>
          <div className='user-choice'></div>
          <div className='computer-choice'></div>
          <div className='result'>
            <h3>You win</h3>
            <button className='btn-replay'>Play again</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Game;
