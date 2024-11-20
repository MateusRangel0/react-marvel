import { ComicSummary } from "./ComicSummary";
import { Event } from './Event';
import { SeriesSummary } from "./SeriesSummary";
import { StorySummary } from "./StorySummary";
import { Url } from "./Url";

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
