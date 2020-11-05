import React from 'react';

//importando css
import css from './picture.module.css'

function Picture({ imageSource, description }) {
  return (
    <div>
      <img className={css.picture} src={imageSource} alt={description} title={description} />
    </div>
  );
}

export default Picture;