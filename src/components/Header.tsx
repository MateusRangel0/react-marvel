import { useContext } from 'react';
import { AuthContext } from "@/util/AuthContext";
import { Link } from 'react-router-dom';
import marvelLogo from '@/assets/marvel-logo.png';

export default function Header() {
  const { logout } = useContext(AuthContext);

  return (
    <header className="flex items-center justify-between bg-red-700 p-4 text-white">
      <div className="flex items-center">
        <img src={marvelLogo} alt="Marvel Logo" className="ml-4 mr-8 h-8 w-24" />
        <nav>
          <Link to="/characters" className="mr-4 font-bold hover:underline">Characters</Link>
          <Link to="/events" className="font-bold hover:underline">Events</Link>
        </nav>
      </div>
      <button onClick={logout} className="mr-6 font-bold hover:underline">
        Logout
      </button>
    </header>
  );
}