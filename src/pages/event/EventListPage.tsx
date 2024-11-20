import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from "@/util/api";
import { Spinner } from "@/components/Spinner";
import toast from 'react-hot-toast';
import { Event } from "@/types/Event";
import EventList from "@/components/event/EventList";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { DEFAULT_PAGE_SIZE } from "@/constants/list.constants";
import Filters from "@/components/Filters";

function EventListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState<string[]>([]);
  const { isSuccess, isLoading, error, data } = useQuery({
    queryKey: ['events', currentPage, searchQuery, orderBy],
    queryFn: () => fetchEvents(currentPage, DEFAULT_PAGE_SIZE, searchQuery, orderBy),
  });

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error.message}`);
    }
  }, [error]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilterChange = (filters: { orderBy: string[] }) => {
    setOrderBy(filters.orderBy);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-10 flex justify-between">
        <Filters onFilterChange={handleFilterChange} />
        <Search onSearch={handleSearch} />
      </div>
      {isLoading && (
        <div className="flex min-h-screen items-center justify-center" data-cy="loading-spinner">
          <Spinner className="mx-0" />
        </div>
      )}
      {isSuccess && (
        <div className="space-y-4">
          <EventList events={data.results as Event[]} />
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

export default EventListPage;