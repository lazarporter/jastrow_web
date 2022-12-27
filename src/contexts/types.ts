export type User = {
  username: string;
};

export type AuthContextType = {
  user?: { username: string };
  login: (username: string, password: string) => Promise<User|undefined>;
  register: (username: string, password: string) => Promise<User|undefined>;
  logout: () => void;
};
