import React, { Fragment, useEffect, useState, useRef } from 'react';

import logo from '../../img/logo-bonus.svg';
import paper from '../../img/icon-paper.svg';
import rock from '../../img/icon-rock.svg';
import scissors from '../../img/icon-scissors.svg';
import lizard from '../../img/icon-lizard.svg';
import spock from '../../img/icon-spock.svg';

const Game = () => {
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState('');
  const choices = ['scissors', 'paper', 'spock', 'rock', 'lizard'];
  let userChoice = undefined;
  let mainView = null;
  let gameView = null;
  let userPicked = null;
  let computerPicked = null;

  // computer choice
  const computerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  // add event for all choices
  useEffect(() => {
    mainView = document.querySelector('.main-view');
    gameView = document.querySelector('.match-view');
    userPicked = document.querySelector('#user-picked');
    computerPicked = document.querySelector('#computer-picked');
    const moves = document.querySelectorAll('.choices-options');
    moves.forEach((move) => {
      move.addEventListener('click', () => {
        userChoice = move.getAttribute('data-choice');

        checkWinner();
        mainView.style.display = 'none';
        gameView.style.display = 'flex';
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

    updateChoice(userPicked, userChoice);
    updateChoice(computerPicked, computerSelected);

    if (userChoice === computerSelected) {
      // draw
      setWinner('Draw');
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
      setWinner('You win');
    } else {
      // user lose
      updateScore(-1);
      setWinner('You lose');
    }
  };

  // play again
  const playAgain = () => {
    mainView.style.display = 'flex';
    gameView.style.display = 'none';
  };

  // updated choices on match view
  const updateChoice = (choiceElem, choice) => {
    const image = choiceElem.querySelector('img');
    // not the best to do but works
    const choiceImg = require(`../../img/icon-${choice}.svg`);
    choiceElem.classList.add(choice);
    image.src = choiceImg;
    image.alt = choice;
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
          <button
            className='btn choices-options btn-spock spock'
            data-choice='spock'
          >
            <span className='btn-inner'>
              <img src={spock} alt='spock' />
            </span>
          </button>
          <button
            className='btn choices-options btn-scissors scissors'
            data-choice='scissors'
          >
            <span className='btn-inner'>
              <img src={scissors} alt='scissors' />
            </span>
          </button>
          <button
            className='btn choices-options btn-paper paper'
            data-choice='paper'
          >
            <span className='btn-inner'>
              <img src={paper} alt='paper' />
            </span>
          </button>
          <button
            className='btn choices-options btn-lizard lizard'
            data-choice='lizard'
          >
            <span className='btn-inner'>
              <img src={lizard} alt='lizard' />
            </span>
          </button>
          <button
            className='btn choices-options btn-rock rock'
            data-choice='rock'
          >
            <span className='btn-inner'>
              <img src={rock} alt='rock' />
            </span>
          </button>
        </main>

        <div className='match-view'>
          <div className='user-choice'>
            <button className='btn' id='user-picked'>
              <span className='btn-inner'>
                <img src='' alt='alt text' />
              </span>
            </button>
            <p>You picked</p>
          </div>
          <div className='computer-choice'>
            <button className='btn' id='computer-picked'>
              <span className='btn-inner'>
                <img src='' alt='alt text' />
              </span>
            </button>
            <p>The house picked</p>
          </div>
          <div className='result-wrapper'>
            <h3 className='result'>{winner}</h3>
            <button className='btn-replay' onClick={playAgain}>
              Play again
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Game;
