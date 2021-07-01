import React from 'react';
import Counter from "./counter";

const Counters = ({onIncrement, onDelete, onDecrement, counters}) => {
  return ( 
  <div>
    {counters.map(counter => (
      <Counter
        key={counter.id}
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    ))}
  </div> );
}
 
export default Counters;