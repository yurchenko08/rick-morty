const URL = 'https://rickandmortyapi.com/api/character';
export const getCharacters = async () => {
  let res = await fetch(URL);
  const { results } = await res.json();
  if (!res.ok) {
    throw new Error(`I can't fetch this ${URL}, status:${res.status}`);
  }
  return results;
};
export const getSingleCharacter = async (id) => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};

export const sortingByName = (list) => {
  return list.sort((a, b) => a.name.localeCompare(b.name));
};
