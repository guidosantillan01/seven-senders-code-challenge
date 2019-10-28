import React from 'react';

import WidgetItem from './WidgetItem';

const WidgetList = ({ widgets }) => {
  return (
    <div>
      {widgets.map(widget => {
        return (
          <WidgetItem
            name={widget.name}
            language={widget.language}
            key={widget.name}
          />
        );
      })}
    </div>
  );
};

export default WidgetList;
