import React from 'react';
import { connect } from 'react-redux';

import WidgetItem from './WidgetItem';

import styles from './styles/WidgetList.module.scss';

const WidgetList = ({ widgets = [] }) => {
  return (
    <div className={styles.list}>
      {widgets.length !== 0 ? (
        widgets.map(widget => {
          return (
            <WidgetItem
              name={widget.name}
              language={widget.language}
              id={widget.id}
              key={widget.id}
            />
          );
        })
      ) : (
        <p>No widgets</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  widgets: state
});

export default connect(mapStateToProps)(WidgetList);
