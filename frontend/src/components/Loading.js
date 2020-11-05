import React from 'react';

//importando css
import css from './loading.module.css';

function Loading({ description }) {
  return (
    <div className={css.flexRow}>
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <div className={css.description}>
        {description}
      </div>
    </div>
  );
}

export default Loading;