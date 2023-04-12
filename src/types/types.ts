export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface ITodos {
  isLoading: boolean;
  todos: ITodos[];
}
export interface ILayoutProps {
  children: React.ReactNode;
}

export interface ILogin {
  isLoading: boolean;
  token: string;
}

export interface IUser{
  email: string;
  password: string;
}

export interface IFormValues{
  email: string;
  password: string;
}