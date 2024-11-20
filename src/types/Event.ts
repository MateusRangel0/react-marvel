export interface Event {
  id: number;
  title: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  urls: URL[];
}