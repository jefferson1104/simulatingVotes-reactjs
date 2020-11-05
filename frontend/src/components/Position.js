import React from 'react';

//importando css
import css from './position.module.css';

function Position({ children }) {
  return (
    <div className={css.position}>
      {children}
    </div>
  )
}

export default Position;