'use client';
import dynamic from "next/dynamic";

const MainPage = dynamic(() => import("@/app/MainPage/MainPage").then(mod => mod.MainPage), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen"><h2>Cargando...</h2></div>
})

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <MainPage />
      </main>
    </>
  );
}
