import Card from '../Card';
import { Character } from '@/types/Character';

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {characters.map((character) => (
        <li key={character.id}>
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            description={character.description}
            imgPath={character.thumbnail.path}
            imgExtension={character.thumbnail.extension}
          />
        </li>
      ))}
    </ul>
  );
};
