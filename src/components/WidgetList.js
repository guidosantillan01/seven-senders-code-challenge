import styles from './styles/WidgetList.module.scss';

import React from 'react';
import { connect } from 'react-redux';

import WidgetItem from './WidgetItem';

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

const mapStateToProps = ({ widgets }) => ({
  widgets
});

export default connect(mapStateToProps)(WidgetList);
