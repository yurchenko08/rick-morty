import { useState, useEffect } from 'react';
import './characterList.scss';
import { Link } from 'react-router-dom';
import { getCharacters, sortingByName } from '../../services/getCharacters';

const CharacterList = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getCharacters(page)
      .then((data) => {
        setCharacters((prevCharacters) => [...prevCharacters, ...data]);
      })
      .then(() => setIsLoading(false))
      .catch((e) => console.log(e.message));
  }, [page]);

  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, page * 8);

  sortingByName(filteredCharacters);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

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
      {isLoading && <div>Loading...</div>}
      {characters && (
        <div className='character-list'>
          {filteredCharacters.map((character) => (
            <div key={character.id} className='character'>
              <Link to={`/details/${character.id}`} className='link'>
                <div className='character-image'>
                  <img src={character.image} alt={character.name} />
                </div>

                <div className='character-details'>
                  <p className='character-name'>{character.name}</p>
                  <p className='character-species'>{character.species}</p>
                </div>
              </Link>
            </div>
          ))}
          {filteredCharacters.length < characters.length && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </div>
      )}
    </>
  );
};

export default CharacterList;
