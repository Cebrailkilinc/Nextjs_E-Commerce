export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface IUser{
  email: string;
  password: string;
}

export interface IFormValues{
  email: string;
  password: string;
}

export interface IAuthInitialState{
  isLoading: boolean;
  data:ILoginResponse;
}
export interface ILoginResponse{
  status:string;
  user:ILoginResponseUser;
  token:string;
}

export interface ILoginResponseUser{
  username:string;
  email:string;
  date:string;
  id:string
}