import React, { useState, useEffect } from 'react';

import Candidates from './components/Candidates';
import Header from './components/Header';
import Loading from './components/Loading';

export default function App() {
  //instanciando estados da aplicacao com useState()
  const [candidates, setCandidates] = useState([]);
  const [previousVotes, setPreviousVotes] = useState([]);
  const [previousPercentages, setPreviousPercentages] = useState([]);


  //Efeitos com useEffect(), consumindo backend para carregar e setar os dados
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
  
          const localPreviousVotes = candidates.map(({id, votes}) => {
            return { id, votes };
          });
  
          const localPreviousPercentages = candidates.map(
            ({id, percentage}) => {
              return { id, percentage };
            }
          );

          //gravando os dados nos estados
          setCandidates(json.candidates);
          setPreviousVotes(localPreviousVotes);
          setPreviousPercentages(localPreviousPercentages);
        });
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [candidates]);
  

  //renderizando componente loading apenas equanto os dados sao carregandos
  if(candidates.length === 0) {
    return (
      <Loading description="Carregando..." />
    );
  }

  return (
    <div className="container">  
      <Header>Votação</Header>
      <Candidates 
        previousVotes={previousVotes} 
        candidates={candidates} 
        previousPercentages={previousPercentages}
      />
    </div>
  );
}
