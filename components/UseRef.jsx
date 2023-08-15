import React, { useState, useEffect, useRef } from 'react';

const ValueChangeTracker = ({ value }) => {
  const prevValueRef = useRef(value); // Initialize with the initial value

  useEffect(() => {
    if (prevValueRef.current !== value) {
        console.log("Previous value is: ",prevValueRef.current)
        console.log('Value changed:', value);
        prevValueRef.current = value; // Update the ref with the current value
    }
  }, [value]);

  return (
    <div>
      <p>My new Value: {value}</p>
      <p>My previous Value :{prevValueRef.current} </p>
      <p>Open the console to see value changes</p>
    </div>
  );
};

export const UseRefComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
      <ValueChangeTracker value={count} />
    </div>
  );
};

