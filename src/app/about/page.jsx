'use client'

import Link from "next/link"

async function getData() {
    const req = await fetch("https://jsonplaceholder.typicode.com/todos" , {next: { revalidate: 3600},}) 
    const data = await req.json()
    return data
}



async function About() {
    const data = await getData()
    return (
    <div className="w-full  lg:max-w-xl mx-auto">
        <h1 className='text-6xl text-center text-red-500 mt-16 font-bold'>About</h1>
       <div className="text-center"> <input type="text" placeholder="Enter Id" className="input input-bordered input-accent w-full max-w-xs " /></div>
       <ul className="list-decimal m-5 br p-10 ">
        {data.map((todo) => {
            return <li key={todo.id}>
                <div className="flex items-center justify-between mb-2 mr-3 font-medium ">
                <h3 className="text-3xl">{todo.title}</h3>
                <Link className="bg-teal-500 rounded-sm p-3 font-medium text-white hover:rounded-lg hover:bg-orange-400 " href={'about/${todo.id}'}>Read</Link>
                </div>
            </li>
        })}
       </ul>
    </div>
  )
}

export default About



// //"use client"
// // Import useState from React
// import { useState } from 'react';

// // ... other imports ...

// async function About() {
//     // Use state to manage the input value
//     const [inputId, setInputId] = useState('');
    
//     const data = await getData();

//     return (
//         <div className="w-full  lg:max-w-xl mx-auto">
//             <h1 className='text-6xl text-center text-red-500 mt-16 font-bold'>About</h1>
//             {/* Input for entering ID */}
//             <div className="text-center">
//                 <input
//                     type="text"
//                     placeholder="Enter Id"
//                     className="input input-bordered input-accent w-full max-w-xs"
//                     // Update inputId state on change
//                     onChange={(e) => setInputId(e.target.value)}
//                 />
//             </div>
//             <ul className="list-decimal m-5 br p-10">
//                 {data.map((todo) => {
//                     return (
//                         <li key={todo.id}>
//                             <div className="flex items-center justify-between mb-2 mr-3 font-medium">
//                                 <h3 className="text-3xl">{todo.title}</h3>
//                                 {/* Update href based on inputId */}
//                                 <Link
//                                     className="bg-teal-500 rounded-sm p-3 font-medium text-white hover:rounded-lg hover:bg-orange-400"
//                                     // If inputId is provided, use it as the dynamic route parameter
//                                     href={inputId ? /about/${inputId} : /about/${todo.id}}
//                                 >
//                                     Read
//                                 </Link>
//                             </div>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }

// export default About;