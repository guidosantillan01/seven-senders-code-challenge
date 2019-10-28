import React from 'react';
import ReactDOM from 'react-dom';
import WidgetList from '../WidgetList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WidgetList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
