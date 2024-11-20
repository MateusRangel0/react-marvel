import InfoList from "../InfoList";
import { Event } from '@/types/Event';
import { CharacterSummary } from "@/types/CharacterSummary";
import { ComicSummary } from "@/types/ComicSummary";
import { SeriesSummary } from "@/types/SeriesSummary";
import { StorySummary } from "@/types/StorySummary";
import { Url } from "@/types/Url";
import DetailContainer from "../DetailContainer";
import Title from "../Title";

interface EventDetailProps {
  event: Event;
}

export default function EventDetail({ event }: EventDetailProps) {
  const imageUrl = `${event.thumbnail.path}.${event.thumbnail.extension}`;

  return (
    <DetailContainer imageUrl={imageUrl} name={event.title}>
      <Title className="text-4xl">{event.title}</Title>
      <p className="text-lg">{event.description || 'No description available'}</p>
      <InfoList<ComicSummary> title="Comics" items={event.comics.items} renderItem={(comic) => comic.name} />
      <InfoList<SeriesSummary> title="Series" items={event.series.items} renderItem={(series) => series.name} />
      <InfoList<StorySummary> title="Stories" items={event.stories.items} renderItem={(story) => `${story.name} (${story.type})`} />
      <InfoList<CharacterSummary> title="Characters" items={event.characters.items} renderItem={(character) => character.name} />
      <InfoList<Url> title="Links" items={event.urls} renderItem={(url) => (
        <a href={url.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {url.type}
        </a>
      )} />
    </DetailContainer>
  );
}