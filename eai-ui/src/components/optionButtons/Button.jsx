import React from 'react';

export default ({ iconClass, text }) => (
    <button className="btn btn-inverse btn-outline-inverse btn-sm" type="button">
      <i className={iconClass} />
      {text}
    </button>
  );
  