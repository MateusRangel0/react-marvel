import InfoList from "../InfoList";
import { Character } from '@/types/Character';
import { ComicSummary } from "@/types/ComicSummary";
import { SeriesSummary } from "@/types/SeriesSummary";
import { StorySummary } from "@/types/StorySummary";
import { Url } from "@/types/Url";
import DetailContainer from "../DetailContainer";
import Title from "../Title";

interface CharacterDetailProps {
  character: Character;
}

export default function CharacterDetail({ character }: CharacterDetailProps) {
  const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  return (
    <DetailContainer imageUrl={imageUrl} name={character.name}>
      <Title className="text-4xl">{character.name}</Title>
      <p className="text-lg">{character.description || 'No description available'}</p>
      <InfoList<ComicSummary> title="Comics" items={character.comics.items} renderItem={(comic) => comic.name} />
      <InfoList<SeriesSummary> title="Series" items={character.series.items} renderItem={(series) => series.name} />
      <InfoList<StorySummary> title="Stories" items={character.stories.items} renderItem={(story) => `${story.name} (${story.type})`} />
      <InfoList<Url> title="Links" items={character.urls} renderItem={(url) => (
        <a href={url.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {url.type}
        </a>
      )} />
    </DetailContainer>
  );
}