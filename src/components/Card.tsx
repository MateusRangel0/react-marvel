import Button from "./Button";

interface CardProps {
  id: number;
  name: string;
  description: string;
  imgPath: string;
  imgExtension: string;
}

export default function Card({ id, name, description, imgPath, imgExtension }: CardProps) {
  const imageUrl = `${imgPath}.${imgExtension}`;

  return (
    <div className="mx-auto w-64 max-w-sm rounded-lg bg-gray-100 p-4 shadow-lg">
      <img src={imageUrl} alt={name} className="h-44 w-full rounded-md object-cover" />
      <h2 className="mt-4 text-center font-semibold">{name}</h2>
      <div className="scrollbar-hide h-28 overflow-auto text-center text-gray-700">
        <p>
          {description || 'No description available'}
        </p>
      </div>
      <Button key={id} type="button" className="mt-4 w-full">
        View Details
      </Button>
    </div>
  );
};