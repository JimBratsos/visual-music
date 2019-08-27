/*

Reusable button component.
Pass text, btnClass (className), handleRouteChange (function), and to (path) as props.
for styles pass either one of the existing classes or write a new one in Button.styles.css.
handleRouteChange() is defined in App.js,
and will set state.route to the value passed to the "to" prop.

*/

import React from 'react';
import './Button.styles.css';

const Button = ({ text, btnClass, handleRouteChange, to }) => (
  <button className={btnClass} onClick={() => handleRouteChange(to)}>
    {text}
  </button>
);

export default Button;