import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './util/AuthContext';
import RootLayout from './components/layouts/RootLayout';
import LoginPage from './pages/LoginPage';
import CharacterListPage from './pages/character/CharacterListPage';
import { Toaster } from "react-hot-toast";
import ErrorPage from "./pages/ErrorPage";
import EventListPage from "./pages/event/EventListPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={createBrowserRouter([
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
            ],
          },
          {
            path: '*',
            element: (
              <ErrorPage />
            ),
          },
        ])} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;