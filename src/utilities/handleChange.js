export const handleChange = input => (e, dispatch) => {
  let splitInput = input.split('.');
  let currentObject;
  if (splitInput[0] === 'event') {
    currentObject = 'event';
  }

  if (splitInput.length === 2) {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: {
        obj: currentObject,
        key: e.target.name,
        value: e.target.value
      }
    });
  }
};
