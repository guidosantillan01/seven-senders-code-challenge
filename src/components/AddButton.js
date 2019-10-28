import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import style from './Button.module.scss';

const AddButton = () => {
  return (
    <Link to="/create-widget">
      <button className={style.add}>Add Widget</button>
    </Link>
  );
};

export default AddButton;
