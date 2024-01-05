import Link from "next/link"


export default function Home(){
  return (
    <main className="text-center font-medium text-cyan-500 mt-36">
      <h2 className="text-6xl">Hello World</h2>
      <Link className=" text-4xl text-emerald-600" href="/about">About</Link>
    </main>
  )
}