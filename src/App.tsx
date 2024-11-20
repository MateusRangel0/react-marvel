import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './util/AuthContext';
import RootLayout from './components/layouts/RootLayout';
import LoginPage from './pages/LoginPage';
import CharacterListPage from './pages/character/CharacterListPage';
import { Toaster } from "react-hot-toast";
import ErrorPage from "./pages/ErrorPage";
import EventListPage from "./pages/event/EventListPage";
import CharacterDetailPage from "./pages/character/CharacterDetailPage";
import EventDetailPage from "./pages/event/EventDetailPage";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/characters',
          element: (
            <ProtectedRoute>
              <CharacterListPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/events',
          element: (
            <ProtectedRoute>
              <EventListPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/characters/:uid',
          element: (
            <ProtectedRoute>
              <CharacterDetailPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/events/:uid',
          element: (
            <ProtectedRoute>
              <EventDetailPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;