export interface LoginApiResponse {
    statusCode: number;
    message: string;
    auth: string;
    data: {
      id: string;
      name: string;
      email: string;
    };
  }
  