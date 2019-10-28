import React from 'react';

const CreateWidget = ({
  handleCreateWidget,
  handleNameChange,
  handleLanguageChange
}) => {
  return (
    <div>
      <form onSubmit={handleCreateWidget}>
        <label>
          Widget name: <input name="name" onChange={handleNameChange} />
        </label>
        <label>
          Language: <input name="language" onChange={handleLanguageChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateWidget;
