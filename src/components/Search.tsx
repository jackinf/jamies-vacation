import React from 'react';

export default function Search() {
  return (
    <div>
      <h3>Where are you flying from?</h3>
      <input type="text" id="flying-from"/>
      <h3>Which office are you flying to?</h3>
      <select name="offices" id="offices">
        <option value="" />
        <option value="Amsterdam">Amsterdam</option>
        <option value="Madrid">Madrid</option>
        <option value="Budapest">Budapest</option>
      </select>
      <button>Search</button>
    </div>
  );
}