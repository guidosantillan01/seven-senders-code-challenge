import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import style from './styles/Button.module.scss';

const AddButton = () => {
  return (
    <Link to="/add-name">
      <button className={style.add}>Add Widget</button>
    </Link>
  );
};

export default AddButton;
