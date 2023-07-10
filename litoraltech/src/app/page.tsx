import Header from "@/components/Header";
import Main from "@/components/HomePage/Main";


export default function Home() {
  return (
    <div className="flex h-[100vh] flex-col w-full bg-black">
      <Header/>
      <Main/>
    </div>
    
  )
}
