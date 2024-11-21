import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from '@/components/Header';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContext } from "@/util/AuthContext";

const mockNavigate = jest.fn();
const mockLogout = jest.fn();

jest.mock('@/assets/marvel-logo.png', () => 'mockImage');
jest.mock('react-router-dom', () => {
  const actualReactRouterDom = jest.requireActual('react-router-dom');
  return {
    ...actualReactRouterDom,
    useNavigate: () => mockNavigate
  };
});

describe('Header', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Marvel Logo")).toBeInTheDocument();
    expect(screen.getByText("Characters")).toBeInTheDocument();
    expect(screen.getByText("Events")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("should call logout when logout button is clicked", () => {
    const queryClient = new QueryClient();
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthContext.Provider value={{ logout: mockLogout, isLoggedIn: true, login: jest.fn() }}>
            <Header />
          </AuthContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    );

    const logoutButton = screen.getByText("Logout");

    fireEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalled();
  });
});