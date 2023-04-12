import Login from '@/features/auth/login';
import { ILayoutProps } from '@/types/types';
import Loading from "@/app/loading";

async function delay(ms:number){
  return new Promise((resolve)=>{setTimeout(resolve, ms)})
}

const LoginPage = async ({ children }: ILayoutProps) => { 
  
  return (
    <div>     
      <Login />     
    </div>
  )
}

export default LoginPage;