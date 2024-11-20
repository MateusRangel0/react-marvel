import { Url } from "url";
import { CharacterSummary } from "./CharacterSummary";
import { ComicSummary } from "./ComicSummary";
import { CreatorSummary } from "./CreatorSummary";
import { SeriesSummary } from "./SeriesSummary";
import { StorySummary } from "./StorySummary";

export interface Event {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: string;
  start: string;
  end: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    available: number;
    collectionURI: string;
    items: CreatorSummary[];
  };
  characters: {
    available: number;
    collectionURI: string;
    items: CharacterSummary[];
  };
  stories: {
    available: number;
    collectionURI: string;
    items: StorySummary[];
  };
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
  next?: {
    resourceURI: string;
    name: string;
  };
  previous?: {
    resourceURI: string;
    name: string;
  };
}