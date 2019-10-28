import styles from './styles/WidgetItem.module.scss';

import React from 'react';

import DeleteConfirmationModal from './DeleteConfirmationModal';

const WidgetItem = ({ name, language, id }) => {
  return (
    <div className={styles.item}>
      <h4>Name</h4>
      <p>{name}</p>

      <h4>Language</h4>
      <p>{language}</p>

      <DeleteConfirmationModal id={id} />
    </div>
  );
};

export default WidgetItem;
