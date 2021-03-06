import React from 'react';

function FirstComponent(props) {
  console.log('***This is FirstComponent Props***', props.items)
  return (
    <div>
      <h2>This is my vehicles listing component</h2>
      <ul>
        {props.items.map((items, index) => {
          return <li key={index}>{props.items[index]}</li>
        })}
      </ul>
    </div>
  )
}
export default FirstComponent;