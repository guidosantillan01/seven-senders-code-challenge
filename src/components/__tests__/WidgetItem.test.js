import React from 'react';
import ReactDOM from 'react-dom';
import WidgetItem from '../WidgetItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WidgetItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
