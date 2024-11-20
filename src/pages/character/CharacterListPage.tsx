import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from "@/util/api";
import { Spinner } from "@/components/Spinner";
import toast from 'react-hot-toast';
import { useEffect } from "react";
import { Character } from "@/types/Character";
import CharacterList from "@/components/character/CharacterList";

function CharactersListPage() {
  const { isSuccess, isLoading, error, data } = useQuery({ queryKey: ['characters'], queryFn: fetchCharacters });

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error.message}`);
    }
  }, [error]);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center" data-cy="loading-spinner">
          <Spinner className="mx-0" />
        </div>
      )}
      <div className="p-4">
        {isSuccess && (
          <CharacterList characters={data as Character[]} />
        )}
      </div>
    </>
  );
}

export default CharactersListPage;