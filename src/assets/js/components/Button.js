import React, { useState } from 'react';

import { motion } from 'framer-motion';

const Button = (props) => {
  const [choice] = useState(props.choice);
  const [image] = useState(props.image);

  return (
    <motion.button
      className={`btn choices-options btn-${choice} ${choice}`}
      whileHover={{ scale: 1.1 }}
    >
      <span className='btn-inner'>
        <img
          src={`${image}`}
          alt={`${choice}`}
          data-choice={`${choice}`}
          onClick={props.handleClick}
        />
      </span>
    </motion.button>
  );
};

export default Button;
