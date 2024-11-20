import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from "@/util/api";
import { Spinner } from "@/components/Spinner";
import toast from 'react-hot-toast';
import { Character } from "@/types/Character";
import CharacterList from "@/components/character/CharacterList";
import Pagination from "@/components/Pagination";
import { DEFAULT_PAGE_SIZE } from "@/constants/list.constants";

function CharactersListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { isSuccess, isLoading, error, data } = useQuery({
    queryKey: ['characters', currentPage],
    queryFn: () => fetchCharacters(currentPage, DEFAULT_PAGE_SIZE),
  });

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error.message}`);
    }
  }, [error]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      {isLoading && (
        <div className="flex items-center justify-center min-h-screen" data-cy="loading-spinner">
          <Spinner className="mx-0" />
        </div>
      )}
      {isSuccess && (
        <div className="space-y-4">
          <CharacterList characters={data.results as Character[]} />
          <Pagination
            currentPage={currentPage}
            itemsQuantity={data.total}
            itemsPerPage={DEFAULT_PAGE_SIZE}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default CharactersListPage;