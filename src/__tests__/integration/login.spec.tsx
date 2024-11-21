import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, AuthContext } from "@/util/AuthContext";
import LoginPage from "@/pages/LoginPage";

const mockNavigate = jest.fn();
const mockLogin = jest.fn().mockResolvedValue(true);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe("LoginPage", () => {
  beforeEach(() => {
    mockLogin.mockClear();
    mockNavigate.mockClear();
  });

  it("should render login form", () => {
    const queryClient = new QueryClient();
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <LoginPage />
          </AuthProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("React Marvel")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("should submit form and call login function with correct credentials", async () => {
    const queryClient = new QueryClient();

    await act(async () => {
      render(
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{ login: mockLogin, isLoggedIn: false, logout: jest.fn() }}>
              <LoginPage />
            </AuthContext.Provider>
          </QueryClientProvider>
        </MemoryRouter>
      );
    });

    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: "Login" });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
    });

    fireEvent.blur(emailInput);
    fireEvent.blur(passwordInput);

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");

    await act(async () => {
      fireEvent.submit(submitButton);
    });

    await waitFor(() => {
      expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
      expect(screen.queryByText("Password is required")).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({ email: "test@example.com", password: "password123" });
      expect(mockNavigate).toHaveBeenCalledWith('/characters', { replace: true });
    });
  });

  it("should show required error messages when fields are empty", async () => {
    const queryClient = new QueryClient();

    await act(async () => {
      render(
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{ login: mockLogin, isLoggedIn: false, logout: jest.fn() }}>
              <LoginPage />
            </AuthContext.Provider>
          </QueryClientProvider>
        </MemoryRouter>
      );
    });

    const submitButton = screen.getByRole("button", { name: "Login" });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(screen.queryByText("Email is required")).toBeInTheDocument();
      expect(screen.queryByText("Password is required")).toBeInTheDocument();
    });

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it("should show required error messages when password field is empty", async () => {
    const queryClient = new QueryClient();

    await act(async () => {
      render(
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{ login: mockLogin, isLoggedIn: false, logout: jest.fn() }}>
              <LoginPage />
            </AuthContext.Provider>
          </QueryClientProvider>
        </MemoryRouter>
      );
    });

    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: "Login" });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    });

    fireEvent.blur(emailInput);

    await act(async () => {
      fireEvent.submit(submitButton);
    });

    await waitFor(() => {
      expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
      expect(screen.queryByText("Password is required")).toBeInTheDocument();
    });

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it("should show required error messages when email field is empty", async () => {
    const queryClient = new QueryClient();

    await act(async () => {
      render(
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{ login: mockLogin, isLoggedIn: false, logout: jest.fn() }}>
              <LoginPage />
            </AuthContext.Provider>
          </QueryClientProvider>
        </MemoryRouter>
      );
    });

    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: "Login" });

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "password123" } });
    });

    fireEvent.blur(passwordInput);

    await act(async () => {
      fireEvent.submit(submitButton);
    });

    await waitFor(() => {
      expect(screen.queryByText("Email is required")).toBeInTheDocument();
      expect(screen.queryByText("Password is required")).not.toBeInTheDocument();
    });

    expect(mockLogin).not.toHaveBeenCalled();
  });
});
