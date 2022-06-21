import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function PhotoAlbum(){
    const [data, setData] = useState()
    const location = useLocation()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${location.pathname.split('/')[2]}/photos`).then((response) => {
            setData(response.data)
        })
    },[])

    console.log(data)

    return(
        <div className="container">
            <div className="grid grid-cols-4 gap-4">
                {
                    data && data.map((val, i) => {
                        return(
                            <div className="bg-indigo-500 px-4 py-4 text-white rounded-md mx-4 my-4" key={i}>
                                <h4 className="font-bold">Title :</h4>
                                <p>{val.title}</p>
                                
                                <div className="flex justify-center">
                                    <img className="pt-4" src={val.thumbnailUrl} alt="image"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PhotoAlbum;