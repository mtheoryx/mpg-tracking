import { useState } from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue, // Used internally only
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};
