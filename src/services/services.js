export const getCharacters = async () => {
  const URL = 'https://rickandmortyapi.com/api/character';
  let res = await fetch(URL);
  if (!res.ok) {
    throw new Error(`I can't fetch this ${URL}, status:${res.status}`);
  }
  return await res.json;
};
