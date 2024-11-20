import md5 from 'md5';

const defaultUrl = 'https://gateway.marvel.com/v1/public/';
const API_KEY = import.meta.env.VITE_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

const fetchData = async (endpoint: string, page: number, pageSize: number, query?: string, orderBy?: string[]) => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${PRIVATE_KEY}${API_KEY}`);
  const offset = (page - 1) * pageSize;
  const searchQuery = query ? `&nameStartsWith=${query}` : '';
  const orderByQuery = orderBy && orderBy.length > 0 ? `&orderBy=${orderBy.join(',')}` : '';
  const response = await fetch(`${defaultUrl}${endpoint}?ts=${ts}&apikey=${API_KEY}&hash=${hash}&offset=${offset}&limit=${pageSize}${searchQuery}${orderByQuery}`);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
};

const fetchById = async (endpoint: string, id: number) => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${PRIVATE_KEY}${API_KEY}`);
  const response = await fetch(`${defaultUrl}${endpoint}/${id}?ts=${ts}&apikey=${API_KEY}&hash=${hash}`);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
};

export const fetchCharacters = (page: number, pageSize: number, query?: string, orderBy?: string[]) => {
  return fetchData('characters', page, pageSize, query, orderBy);
};

export const fetchCharacterById = (id: number) => {
  return fetchById('characters', id);
};

export const fetchEvents = (page: number, pageSize: number, query?: string, orderBy?: string[]) => {
  return fetchData('events', page, pageSize, query, orderBy);
};

export const fetchEventById = (id: number) => {
  return fetchById('events', id);
};