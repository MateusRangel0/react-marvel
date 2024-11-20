import md5 from 'md5';

const defaultUrl = 'https://gateway.marvel.com/v1/public/';
const API_KEY = import.meta.env.VITE_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

export const fetchCharacters = async (page: number, pageSize: number, query?: string, orderBy?: string[]) => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${PRIVATE_KEY}${API_KEY}`);
  const offset = (page - 1) * pageSize;
  const searchQuery = query ? `&nameStartsWith=${query}` : '';
  const orderByQuery = orderBy && orderBy.length > 0 ? `&orderBy=${orderBy.join(',')}` : '';
  const response = await fetch(`${defaultUrl}characters?ts=${ts}&apikey=${API_KEY}&hash=${hash}&offset=${offset}&limit=${pageSize}${searchQuery}${orderByQuery}`);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
};