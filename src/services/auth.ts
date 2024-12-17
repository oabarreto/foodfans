import api from "./api";

interface LoginResponse {
  accessToken: string;
}

export const authService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: async (data: any) => {
    const response = await api.post("/users/signup", {
      ...data,
    });

    return response;
  },
  login: async (email: string, password: string): Promise<string> => {
    const response = await api.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
    const { accessToken: token } = response.data;

    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }

    return token;
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  },

  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  },
};
