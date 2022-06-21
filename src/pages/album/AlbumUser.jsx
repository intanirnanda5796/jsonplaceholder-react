import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function AlbumUser(){
    const [data, setData] = useState()
    const location = useLocation()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${location.pathname.split('/')[2]}/albums/`).then((response) => {
            setData(response.data)
        })
    },[])

    console.log(data)

    return(
        <div className="container">
            <div className="grid grid-cols-3 gap-4">
                {
                    data && data.map((val,i) => {
                        return(
                            <div className="bg-indigo-500 px-4 py-4 text-white rounded-md mx-4 my-4" key={i}>
                                <h4 className="font-bold">Title :</h4>
                                <p>{val.title}</p>
                                <div className="flex justify-center pt-3 text-center">
                                    <a className="bg-sky-500 hover:bg-sky-600 w-80 px-2 py-2 rounded-md border-none" href={`/photo/${val.id}`} >Show Photos</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AlbumUser;