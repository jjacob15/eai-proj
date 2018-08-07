import React from 'react';
import cx from 'classnames';

const ProfileMenu = props => {
  const { show } = props;
  const c = cx({
    'show-notification': true,
    'profile-notification': true,
  });
  return (
    <ul className={c} style={{ display: show ? 'block' : 'none' }}>
      <li>
        <a>
          <i className="ti-settings" />
          Settings
        </a>
      </li>
      <li>
        <a>
          <i className="ti-user" />
          Profile
        </a>
      </li>
      <li>
        <a>
          <i className="ti-email" />
          My Messages
        </a>
      </li>
      <li>
        <a>
          <i className="ti-lock" />
          Lock Screen
        </a>
      </li>
      <li>
        <a>
          <i className="ti-layout-sidebar-left" />
          Logout
        </a>
      </li>
    </ul>
  );
};

export default ProfileMenu;
