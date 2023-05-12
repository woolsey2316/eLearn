export interface IGenericResponse {
  status: string;
  message: string;
}

export interface LoginResponse {
  email: string;
  expires: number;
  id: string;
  success: boolean;
  token: string;
  message?: string;
}