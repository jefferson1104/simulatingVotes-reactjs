import React from 'react';
import FlipMove from 'react-flip-move';

import Candidate from './Candidate';
import Card from './Card';

// import { Container } from './styles';

function Candidates({ candidates, previousVotes, previousPercentages }) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          //desestruturando o item candidate
          const { id } = candidate

          const previousVotesObject = previousVotes.find(
            (item) => item.id === id
          );

          const previousVote = !!previousVotesObject 
            ? previousVotesObject.vote 
            : 0;

          const previousPercentagesObject = previousPercentages.find(
            (item) => item.id === id
          );
  
          const previousPercentage = !!previousPercentagesObject 
            ? previousPercentagesObject.percentage 
            : 0;          

          return (
            <div key={id}>
              <Card>
                <Candidate 
                  previousVote={previousVote} 
                  previousPercentage={previousPercentage}
                  candidate={candidate} 
                  position={index + 1}                 
                />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Candidates;