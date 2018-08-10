import React from 'react';

const Breadcrumb = props => {
  const { nav } = props;
  return (
    <div style={{ display: 'inline-block' }}>
      <ul className="breadcrumb-title">
        <li className="breadcrumb-item">
          <i className="icofont icofont-home" />
        </li>
        <li className="breadcrumb-item">
          <a>
{nav.menu.selected.label || ''}
</a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
