import { useState, useEffect } from 'react';
import './characterList.scss';
import { getCharacters } from '../../services/getCharacters';
const CharacterList = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data);
        console.log(data);
      })
      .then(setIsLoading(true))
      .catch((e) => console.log(e.message));
  }, []);
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
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
      {isLoading ? null : <div>Loading...</div>}
      {characters && (
        <div className='character-list'>
          {filteredCharacters.map((character) => (
            <div key={character.id} className='character'>
              <div className='character-image'>
                <img src={character.image} alt={character.name} />
              </div>

              <div className='character-details'>
                <p className='character-name'>{character.name}</p>
                <p className='character-species'>{character.species}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CharacterList;
