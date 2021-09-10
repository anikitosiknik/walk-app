export interface UserCredentialsInterfce {
  email: string;
  password: string;
}

export interface LoginResponseInterface {
  token: string;
}

export interface RegisterResponseInterface {
  id: number;
  token: string;
}

export interface AuthStateInterace {
  email: string | null;
  id: number | null;
}
