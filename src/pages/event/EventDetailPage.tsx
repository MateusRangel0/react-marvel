import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchEventById } from '@/util/api';
import { Spinner } from '@/components/Spinner';
import toast from 'react-hot-toast';
import EventDetail from "@/components/event/EventDetail";
import { Event } from "@/types/Event";

export default function EventDetailPage() {
  const { uid } = useParams<{ uid: string }>();

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ['event', uid],
    queryFn: () => fetchEventById(Number(uid)),
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
      {isSuccess && <EventDetail event={data.results[0] as Event} />}
    </div>
  );
}