import React from 'react';

export default () => (
  <span>
    <li className="" title="Notification">
      <a>
        <i className="ti-bell" />
        <span className="badge bg-c-pink" />
      </a>
    </li>
    <li className="" title="Chat">
      <a className="displayChatbox">
        <i className="ti-comments" />
        <span className="badge bg-c-green" />
      </a>
    </li>
  </span>
);
