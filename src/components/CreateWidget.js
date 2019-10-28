import React from 'react';

const CreateWidget = () => {
  return (
    <div>
      <form>
        <label>
          Widget name: <input name="name" />
        </label>
        <label>
          Language: <input name="language" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateWidget;
