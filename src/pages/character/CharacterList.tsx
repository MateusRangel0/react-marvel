import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from "@/util/api";
import { Spinner } from "@/components/Spinner";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { Character } from "@/types/Character";

function CharactersList() {
  const { isSuccess, isLoading, error, data } = useQuery({ queryKey: ['characters'], queryFn: fetchCharacters });

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error.message}`);
    }
  }, [error]);

  return (
    <>
      <Toaster />
      {isLoading && (
        <div className="flex items-center justify-center min-h-screen" data-cy="loading-spinner">
          <Spinner className="mx-0" />
        </div>
      )}

      {isSuccess &&
        data?.map((character: Character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
          </div>
        ))}
    </>
  );
}

export default CharactersList;