import React from 'react';
import classname from 'classnames';

export default class Button extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { text, onClick } = this.props;

    if (onClick) onClick(text);
  }
  render() {
    const { text, disabled, iconClass, selected } = this.props;
    const classes = classname({
      'btn btn-inverse btn-outline-inverse btn-sm': true,
      'active': selected
    });
    return (
      <button className={classes} type="button" disabled={disabled} onClick={this.handleClick} onKeyPress={this.handleClick}>
        <i className={iconClass} />
        {text}
      </button>
    )
  }
}
// export default ({ iconClass, text, disabled }) => {
//   const classes = classname({
//     'btn btn-inverse btn-outline-inverse btn-sm': true,
//   });
//   return (
//     <button className={classes} type="button" disabled={disabled}>
//       <i className={iconClass} />
//       {text}
//     </button>
//   );
// };
