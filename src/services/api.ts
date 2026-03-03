type ApiError = {
  message: string;
  status?: number;
  data?: any;
};

type HeadersInit = Record<string, string>;

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor() {
    this.baseUrl = "https://dummyjson.com"; // Нужно убрать в .env
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      ...this.defaultHeaders,
      ...(options.headers as HeadersInit),
    };

    const config: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);

      // Handle 204 No Content
      if (response.status === 204) {
        return {} as T;
      }

      const data = await response.json();

      if (!response.ok) {
        const error: ApiError = {
          message: data.message || "An error occurred",
          status: response.status,
          data: data,
        };

        throw error;
      }

      return data as T;
    } catch (error) {
      if (error instanceof Error) {
        // Network error or JSON parsing error
        throw {
          message: error.message,
          status: 0,
        } as ApiError;
      }
      throw error;
    }
  }

  public async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }
}

export const apiClient = new ApiClient();
