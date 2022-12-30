import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Users  = (props) => {
    const [users, setUsers] = useState([])
    console.log('users', users)
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const result = response.data
            setUsers(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])

    return (
        <div>
            <h3>User List - {users.length}</h3>
            <ul>
                {
                    users.map((user) => {
                        return <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users