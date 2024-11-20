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
    <div className="bg-gray-100 shadow-lg rounded-lg p-4 w-64 max-w-sm mx-auto">
      <img src={imageUrl} alt={name} className="w-full h-44 rounded-md object-cover" />
      <h2 className="font-semibold text-center mt-4">{name}</h2>
      <div className="text-gray-700 text-center overflow-auto h-28 scrollbar-hide">
        <p>
          {description || 'No description available'}
        </p>
      </div>
      <Button key={id} type="button" className="mt-4">
        View Details
      </Button>
    </div>
  );
};