export interface User {
  id: string;
  email: string;
  password: string;
  role: string;
}

export const DEFAULT_USER: User = {
  id: null,
  email: '',
  password: '',
  role: null
};
