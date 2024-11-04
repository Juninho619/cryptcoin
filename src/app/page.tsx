import Login from "@/components/Login";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-[#ccccff]'>
      <Login />
    </main>
    </div>
  );
}
