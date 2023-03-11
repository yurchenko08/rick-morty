import { useState, useEffect } from 'react';
import './characterList.scss';
const CharacterList = () => {
  const [search, setSearch] = useState('');
  return (
    <div className='input-container'>
      <input
        type='text'
        placeholder='Filter by name...'
        className='input'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};
export default CharacterList;
