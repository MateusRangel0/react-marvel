import md5 from 'md5';

const defaultUrl = 'https://gateway.marvel.com/v1/public/';
const API_KEY = import.meta.env.VITE_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

export const fetchCharacters = async () => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${PRIVATE_KEY}${API_KEY}`);
  const response = await fetch(`${defaultUrl}characters?ts=${ts}&apikey=${API_KEY}&hash=${hash}`);
  const data = await response.json();
  return data.data.results;
};