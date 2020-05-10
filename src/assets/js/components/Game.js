import React, { Fragment, useEffect, useState } from 'react';

import logo from '../../img/logo-bonus.svg';
import paper from '../../img/icon-paper.svg';
import rock from '../../img/icon-rock.svg';
import scissors from '../../img/icon-scissors.svg';
import lizard from '../../img/icon-lizard.svg';
import spock from '../../img/icon-spock.svg';

const Game = () => {
  // const [userChoice, setUserChoice] = useState();
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState('');
  const [mainView, setMainView] = useState();
  const [gameView, setGameView] = useState();
  const choices = ['scissors', 'paper', 'spock', 'rock', 'lizard'];
  let userChoice = undefined;
  let computerPicked = null;
  let userPicked = null;

  useEffect(() => {
    setMainView(document.querySelector('.main-view'));
    setGameView(document.querySelector('.game-view'));
  }, []);

  useEffect(() => {
    computerPicked = document.querySelector('#computer-picked');
    userPicked = document.querySelector('#user-picked');
  });

  // computer choice
  const computerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const getUserChoice = (event) => {
    userChoice = event.target.getAttribute('data-choice');
    console.log(userChoice);
    checkWinner();
  };

  // update score
  const updateScore = (value) => {
    setScore(score + value);
  };

  // check winner
  const checkWinner = () => {
    const computerSelected = computerChoice();
    mainView.style.display = 'none';
    gameView.style.display = 'flex';

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

  // update choice image
  const updateChoice = (choiceEl, choice) => {
    const image = choiceEl.querySelector('img');
    const choiceImg = require(`../../img/icon-${choice}.svg`);

    choiceEl.classList.add(choice, 'btn');
    console.log(computerPicked);
    image.src = choiceImg;
    image.alt = choice;
  };

  // play again
  const playAgain = () => {
    mainView.style.display = 'flex';
    gameView.style.display = 'none';
    computerPicked.className = 'cleanstate';
    userPicked.className = 'cleanstate';
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
          <button className='btn choices-options btn-spock spock'>
            <span className='btn-inner'>
              <img
                src={spock}
                alt='spock'
                data-choice='spock'
                onClick={getUserChoice}
              />
            </span>
          </button>
          <button className='btn choices-options btn-scissors scissors'>
            <span className='btn-inner'>
              <img
                src={scissors}
                alt='scissors'
                data-choice='scissors'
                onClick={getUserChoice}
              />
            </span>
          </button>
          <button className='btn choices-options btn-paper paper'>
            <span className='btn-inner'>
              <img
                src={paper}
                alt='paper'
                data-choice='paper'
                onClick={getUserChoice}
              />
            </span>
          </button>
          <button className='btn choices-options btn-lizard lizard'>
            <span className='btn-inner'>
              <img
                src={lizard}
                alt='lizard'
                data-choice='lizard'
                onClick={getUserChoice}
              />
            </span>
          </button>
          <button className='btn choices-options btn-rock rock'>
            <span className='btn-inner'>
              <img
                src={rock}
                alt='rock'
                data-choice='rock'
                onClick={getUserChoice}
              />
            </span>
          </button>
        </main>

        <div className='game-view'>
          <div className='user-choice'>
            <button className='btn' id='user-picked'>
              <span className='btn-inner'>
                <img src='' alt={userChoice} />
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
