import React from 'react';

import DeleteButton from './DeleteButton';

const WidgetItem = () => {
  return (
    <div>
      <h4>Name</h4>
      <p>Weather Widget</p>

      <h4>Language</h4>
      <p>English</p>

      <DeleteButton />
    </div>
  );
};

export default WidgetItem;
