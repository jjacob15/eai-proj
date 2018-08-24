import React from 'react';
import classname from 'classnames';

export default ({ iconClass, text, disabled }) => {
  const classes = classname({
    'btn btn-inverse btn-outline-inverse btn-sm': true,
  });
  return (
    <button className={classes} type="button" disabled={disabled}>
      <i className={iconClass} />
      {text}
    </button>
  );
};
