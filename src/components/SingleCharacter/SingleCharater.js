import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSingleCharacter } from '../../services/getCharacters';
import './singleCharacter.scss';
const SingleCharacter = ({ id }) => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleCharacter(characterId);
      setCharacter(data);
      setIsLoading(true);
    };
    fetchData();
  }, [characterId]);

  return (
    <div className='wrapper'>
      <div className='button-back'>GO BACK</div>
      {isLoading ? (
        <div className='character-container'>
          <div className='character-image'>
            <img src={character.image} alt={character.name} />
          </div>
          <div className='character-information'>
            <h2>{character.name}</h2>
            <p>Informations</p>
            <div className='character-details'>
              <div>
                <p>Gender</p>
                <p>{character.gender}</p>
              </div>
              <div>
                <p>Status</p>
                <p>{character.status}</p>
              </div>
              <div>
                <p>Specie</p>
                <p>{character.specie}</p>
              </div>
              <div>
                <p>Origin</p>
                <p> {character.origin.name}</p>
              </div>
              <div>
                <p>Type</p>
                <p>{character.type}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default SingleCharacter;
