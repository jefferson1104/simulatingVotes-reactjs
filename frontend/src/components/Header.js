import React from 'react';

function Header({ children }) {
  return (
    <>      
      <h1 style={{ textAlign: 'center', color: "#fff"}}>{children}</h1>
      <p style={{ textAlign: 'center', color: "#fff"}}>Qual o melhor rapper de todos os tempos?</p>
    </>
  );
}

export default Header;