import React from 'react';

function Name({ children }) {
  return (
    <div style={{fontWeight: 'bold'}}>
      { children }
    </div>
  );
}

export default Name;