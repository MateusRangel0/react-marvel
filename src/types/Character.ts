export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: ComicSummary[];
  };
  series: {
    available: number;
    collectionURI: string;
    items: SeriesSummary[]; 
  };
  stories: {
    available: number;
    collectionURI: string;
    items: StorySummary[]; 
  };
  events: {
    available: number;
    collectionURI: string;
    items: Event[];
  };
  urls: Url[];
}

interface ComicSummary {
  resourceURI: string;
  name: string;
}

interface SeriesSummary {
  resourceURI: string;
  name: string;
}

interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

interface Url {
  type: string;
  url: string;
}