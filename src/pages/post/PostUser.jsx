import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function PostUser(){
    const [data, setData] = useState()
    const location = useLocation();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${location.pathname.split('/')[2]}/posts/`).then((response) => {
            setData(response.data)
        })
    },[])

    console.log(data)

    return(
        <div className="container">
            <div className="grid grid-cols-2 gap-4">
                {
                    data && data.map((val, i) => {
                        return(
                            <div className="bg-indigo-500 px-6 py-6 mx-2 my-2 text-white rounded-md" key={i}>
                                <h4 className="font-bold">Title :</h4>
                                <p>{val.title}</p>
                                <br/>
                                <h4 className="font-bold">Body :</h4>
                                <p>{val.body}</p>
                                <div className="flex justify-center pt-3 text-center">
                                    <a className="bg-sky-500 hover:bg-sky-600 w-80 px-2 py-2 rounded-md border-none" href={`/comment/${val.id}`} >Show Comment</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostUser;