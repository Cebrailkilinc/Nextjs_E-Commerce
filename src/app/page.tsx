import Card from "@/components/Card";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

export default async function Home() {
  debugger
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 px-20 py-5">
        <div className="">06</div>
        <div className="col-span-5">          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
            <div >
              <Card />
            </div>
            <div >
              <Card />
            </div>
            <div >
              <Card />
            </div>
            <div >
              <Card />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
