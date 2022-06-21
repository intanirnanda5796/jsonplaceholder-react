import { useEffect, useState } from 'react';
import axios from 'axios'

function Home(){
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            setData(response.data)
        })
    },[])

    console.log(data)

    return(
        <div className="container">
            <div className="grid grid-cols-3 gap-4">
                {
                    data && data.map((val, i) => {
                        return(
                            <div key={i} className="bg-indigo-500 rounded-md px-8 py-8 mx-8 my-8 text-white">
                                <h4 className="font-bold">Name :</h4>
                                <p>{val.name}</p>
                                <br/>
                                <h4 className="font-bold">Email :</h4>
                                <p>{val.email}</p>
                                <div className="flex justify-center pt-3 text-center">
                                    <a className="bg-sky-500 hover:bg-sky-600 w-80 px-2 py-2 rounded-md border-none" href={`/post/${val.id}`} >User Post</a>
                                </div>
                                <div className="flex justify-center pt-3 text-center">
                                    <a className="bg-sky-500 hover:bg-sky-600 w-80 px-2 py-2 rounded-md border-none" href={`/album/${val.id}`} >User Album</a>
                                </div>
                                <div className="flex justify-center pt-3 text-center">
                                    <a className="bg-sky-500 hover:bg-sky-600 w-80 px-2 py-2 rounded-md border-none" href={`/todo/${val.id}`} >User Todo</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;