import { useContext } from 'react';
import { AuthContext } from "@/util/AuthContext";
import { Link } from 'react-router-dom';
import marvelLogo from '@/assets/marvel-logo.png';

export default function Header() {
  const { logout } = useContext(AuthContext);

  return (
    <header className="bg-red-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={marvelLogo} alt="Marvel Logo" className="h-8 ml-4 mr-8 w-24" />
        <nav>
          <Link to="/characters" className="mr-4 hover:underline font-bold">Characters</Link>
          <Link to="/events" className="hover:underline font-bold">Events</Link>
        </nav>
      </div>
      <button onClick={logout} className="hover:underline font-bold mr-6">
        Logout
      </button>
    </header>
  );
}