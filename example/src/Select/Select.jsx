import React from 'react';

const Select = ({ animations, selected, onChange }) => (
  <select value={selected} onChange={onChange}>
    {animations.map(({ group, animations: groupAnimations }) => (
      <optgroup key={group} label={group}>
        {groupAnimations.map(animation => (
          <option key={animation} value={animation}>
            {animation}
          </option>
        ))}
      </optgroup>
    ))}
  </select>
);

export default Select;
