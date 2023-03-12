const URL = 'https://rickandmortyapi.com/api/character';
export const getCharacters = async () => {
  let res = await fetch(URL);
  const { results } = await res.json();
  if (!res.ok) {
    throw new Error(`I can't fetch this ${URL}, status:${res.status}`);
  }
  return results;
};
export const transformCharacter = (character) => {
  return {
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    origin: character.origin.name,
    type: character.type || 'Unknown',
    image: character.image,
  };
};
