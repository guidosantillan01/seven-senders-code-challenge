import React from 'react';

import WidgetList from './WidgetList';
import AddButton from './AddButton';

const Main = ({ widgets }) => {
  return (
    <div>
      <AddButton />
      <WidgetList widgets={widgets} />
    </div>
  );
};

export default Main;
