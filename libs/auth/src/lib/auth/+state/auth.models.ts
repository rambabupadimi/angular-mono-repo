/**
 * Interface for the 'Auth' data
 */
export interface AuthEntity {
  id: string | number; // Primary ID
  name: string;
}

export interface LoginEntity {
  email: string;
  password: string;
}


export interface UserEntity{
  Id: number;
  Name: string;
  Email: string;
  Token: string;
}


export interface LoginResponse {
  data: UserEntity,
  code: number,
  message: string;
}
