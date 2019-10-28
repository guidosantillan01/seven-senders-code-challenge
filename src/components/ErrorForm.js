import style from './styles/Error.module.scss';

import React from 'react';

export default function ErrorForm() {
  return (
    <div>
      <p className={style.error}>Field is required</p>
    </div>
  );
}
