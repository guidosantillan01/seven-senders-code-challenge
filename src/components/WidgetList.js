import React from 'react';

import WidgetItem from './WidgetItem';

const WidgetList = ({ widgets = [] }) => {
  return (
    <div>
      {widgets.length !== 0 ? (
        widgets.map(widget => {
          return (
            <WidgetItem
              name={widget.name}
              language={widget.language}
              key={widget.name}
            />
          );
        })
      ) : (
        <p>No widgets</p>
      )}
    </div>
  );
};

export default WidgetList;
