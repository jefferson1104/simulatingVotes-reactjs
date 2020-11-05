import React from 'react';

import css from './card.module.css'

function Card({ children }) {
  //concatenando a className do materialize com a do css que criei
  const classes = `card ${css.cardExt}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Card;