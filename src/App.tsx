import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './util/AuthContext';
import RootLayout from './components/layouts/RootLayout';
import LoginPage from './pages/LoginPage';
import CharacterList from './pages/character/CharacterList';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={createBrowserRouter([
          {
            path: '/',
            element: <RootLayout />,
            children: [
              {
                path: '/',
                element: <LoginPage />,
              },
              {
                path: '/',
                element: (
                  <ProtectedRoute>
                    <CharacterList />
                  </ProtectedRoute>
                ),
              },
              {
                path: '/characters',
                element: (
                  <ProtectedRoute>
                    <CharacterList />
                  </ProtectedRoute>
                ),
              },
            ],
          },
        ])} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;