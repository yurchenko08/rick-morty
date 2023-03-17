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
      console.log(character);
    };
    fetchData();
  }, [characterId]);

  return (
    <div className='wrapper'>
      <Link to='/' className='back-button'>
        <span>GO BACK</span>
      </Link>
      {isLoading ? (
        <div className='character-container'>
          <div className='character-image'>
            <img src={character.image} alt={character.name} />
          </div>
          <div className='character-information'>
            <h2 className='character-name'>{character.name}</h2>
            <p
              style={{ fontWeight: '500', fontSize: '20px', color: '#8E8E93' }}
            >
              Informations
            </p>
            <div className='character-details'>
              <div>
                <p className='details-caption'>Gender</p>
                <p>{character.gender}</p>
              </div>
              <div>
                <p className='details-caption'>Status</p>
                <p>{character.status}</p>
              </div>
              <div>
                <p className='details-caption'>Specie</p>
                <p>{character.species}</p>
              </div>
              <div>
                <p className='details-caption'>Origin</p>
                <p> {character.origin.name}</p>
              </div>
              <div>
                <p className='details-caption'>Type</p>
                <p>{character.type ? character.type : 'Unknown'}</p>
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
