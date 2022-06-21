import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function TodoUser(){
    const [data, setData] = useState()
    const location = useLocation()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${location.pathname.split('/')[2]}/todos`).then((response) => {
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
                                <h4 className="font-bold">Todo ID :</h4>
                                <p>{val.id}</p>
                                <br/>
                                <h4 className="font-bold">Title :</h4>
                                <p>{val.title}</p>
                                <br/>
                                <h4 className="font-bold">Status :</h4>
                                <div className={ val.completed === true ? "bg-teal-500 px-3 py-3 text-center mt-3" : "bg-rose-700 px-3 py-3 text-center mt-3" }>
                                    <p>{ val.completed === true ? "Completed" : "Not completed" }</p>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoUser;