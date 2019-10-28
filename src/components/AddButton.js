import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const AddButton = () => {
  return (
    <Link to="/create-widget">
      <button>Add Widget</button>
    </Link>
  );
};

export default AddButton;
