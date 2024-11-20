import { useNavigate } from 'react-router-dom';
import { Event } from '@/types/Event';
import Card from "../Card";

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/events/${id}`);
  };

  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {events.map((event) => (
        <li key={event.id}>
          <Card
            key={event.id}
            id={event.id}
            name={event.title}
            description={event.description}
            imgPath={event.thumbnail.path}
            imgExtension={event.thumbnail.extension}
            onClickButton={() => handleCardClick(event.id)}
          />
        </li>
      ))}
    </ul>
  );
}