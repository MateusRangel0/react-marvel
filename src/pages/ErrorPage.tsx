import Button from "@/components/Button";
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-red-700 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-8">Something went wrong. The page you are looking for does not exist.</p>
      <Button
        onClick={() => navigate(-1)}
        type="button"
        className="w-40"
      >
        Go Back
      </Button>
    </div>
  );
}