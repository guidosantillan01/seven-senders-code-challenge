export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('widgetApp', serializedState);
  } catch (err) {}
};
