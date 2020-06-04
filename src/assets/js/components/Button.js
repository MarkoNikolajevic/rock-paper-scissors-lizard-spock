import React, { useState } from 'react';

const Button = (props) => {
  const [choice] = useState(props.choice);
  const [image] = useState(props.image);

  return (
    <button className={`btn choices-options btn-${choice} ${choice}`}>
      <span className='btn-inner'>
        <img
          src={`${image}`}
          alt={`${choice}`}
          data-choice={`${choice}`}
          onClick={props.handleClick}
        />
      </span>
    </button>
  );
};

export default Button;
