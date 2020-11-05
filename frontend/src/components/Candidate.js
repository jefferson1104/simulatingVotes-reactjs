import React from 'react';
import Info from './Info';
import Percentage from './Percentage';
import Picture from './Picture';
import Popularity from './Popularity';
import Position from './Position';
import Votes from './Votes';
import Name from './Name';

//importando css
import css from './candidate.module.css';

//funcao Candidate com a props candidate e o children position
function Candidate({ previousVote, previousPercentage, candidate, position }) {
  //desestruturando a props candidate
  const { id, name, votes, percentage, popularity } = candidate;

  const imageSource = `${id}.jpg`;

  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name} />
      <Info>
        <Name>{name}</Name>  
        
        <Votes 
          value={votes} 
          previous={previousVote} 
          previousPercentage={previousPercentage}        
        />
        
        <Percentage value={percentage} previous={previousPercentage}>
          {percentage}        
        </Percentage>    
        
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}

export default Candidate;