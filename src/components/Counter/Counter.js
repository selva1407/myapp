import React from 'react';
import './Counter.css';
import { useState, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const holdInterval = useRef(null);

  const startHold = (direction) => {
    clearInterval(holdInterval.current);
    holdInterval.current = setInterval(() => {
      setCount((prevCount) => {
        return direction === 'increment' ? prevCount + 1 : prevCount - 1;
      });
    }, 100);
  };

  const stopHold = () => {
    clearInterval(holdInterval.current);
  };

  const increment = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <section>
      <h2>Counter</h2>
      <div className="counter-container">
        <button
          className="btn-select"
          onClick={decrement}
          onMouseDown={() => startHold('decrement')}
          onMouseUp={stopHold}
          onMouseLeave={stopHold}
          onTouchStart={() => startHold('decrement')}
          onTouchEnd={stopHold}
        >
          -
        </button>
        <button>{count}</button>
        <button
          className="btn-select"
          onClick={increment}
          onMouseDown={() => startHold('increment')}
          onMouseUp={stopHold}
          onMouseLeave={stopHold}
          onTouchStart={() => startHold('increment')}
          onTouchEnd={stopHold}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default Counter;
