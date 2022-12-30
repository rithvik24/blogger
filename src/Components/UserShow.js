import React,{useState,useEffect} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const UserShow = (props) => {
    const {id} = props.match.params
    const [user, setUser] = useState({})
    const [post, setPost] = useState([])
    console.log(user)
    console.log(post)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const result = response.data
            setUser(result)
        })
        .catch((err) => {
            alert(err.message)
        })
        
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            const result = response.data
            setPost(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])

    return (
        <div>
            <h3>User Name : {user.name}</h3>
            <h3>Post written by {user.name} </h3>
            <ul>
                {
                    post.map((ele) => {
                        return <li key={ele.id}><Link to={`/post/${ele.id}`}>{ele.title}</Link></li>
                    })
                }
            </ul>
        </div>
        
    )
}

export default UserShow