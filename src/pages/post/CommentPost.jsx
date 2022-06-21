import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function PostComment(){
    const [data, setData] = useState()
    const location = useLocation()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${location.pathname.split('/')[2]}/comments/`).then((response) => {
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
                        <div className="bg-indigo-500 px-4 py-4 text-white rounded-md mx-4 my-4">
                            <h4 className="font-bold">Name :</h4>
                            <p>{val.name}</p>
                            <br />

                            <h4 className="font-bold">Email :</h4>
                            <p>{val.name}</p>
                            <br/>

                            <h4 className="font-bold">Body :</h4>
                            <p>{val.body}</p>
                            <br />
                        </div>
                    )
                }) 
            }
            </div>
        </div>
    )
}

export default PostComment;