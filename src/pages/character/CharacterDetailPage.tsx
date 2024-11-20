import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacterById } from '@/util/api';
import { Spinner } from '@/components/Spinner';
import toast from 'react-hot-toast';
import CharacterDetail from "@/components/character/CharacterDetail";
import { Character } from "@/types/Character";

export default function CharacterDetailPage() {
  const { uid } = useParams<{ uid: string }>();

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ['character', uid],
    queryFn: () => fetchCharacterById(Number(uid)),
  });

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error.message}`);
    }
  }, [error]);

  return (
    <div className="container mx-auto p-4">
      {isLoading && (
        <div className="flex min-h-screen items-center justify-center" data-cy="loading-spinner">
          <Spinner className="mx-0" />
        </div>
      )}
      {isSuccess && <CharacterDetail character={data.results[0] as Character} />}
    </div>
  );
}