import React from 'react';

export default ({ state, toggleClick }) => {
  const style = {
    position: 'absolute',
    top: '15px',
    right: '20px',
    fontSize: '22px',
    zIndex: 100,
    cursor: 'pointer',
  };
  return (
    <div style={style} onClick={toggleClick} onKeyDown={toggleClick}>
      {state ? (
        <i className="icofont icofont-simple-up" title="Collapse View Options" />
      ) : (
        <i className="icofont icofont-simple-down" title="Pin View Options" />
      )}
    </div>
  );
};
