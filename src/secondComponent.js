import React from 'react';

function SecondComponent(props) {
  console.log('***This is SecondComponent Props***', props.items)
  return (
    <div>
      <h2>This is my housing listing component</h2>
      <ul>
        {props.items.map((items, index) => {
          return <li key={index}>{props.items[index]}</li>
        })}
      </ul>
    </div>
  )
}
export default SecondComponent;