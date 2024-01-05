async function getData(id) {
    const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}` , {next: { revalidate: 3600},}) 
    const data = await req.json()
    return data
}



export default async function Page({ params }){
    const data = await getData(params.id)
    return <div>
        <h1 className="text-4xl font-bold">Title:{data.title}</h1>
        <p>Completed:{data.completed ? "✅" : "❌"}</p>
    </div>
}