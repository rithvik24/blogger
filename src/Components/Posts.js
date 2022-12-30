import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts  = (props) => {
    const [posts, setPosts] = useState([])
    console.log('posts', posts)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const result = response.data
            setPosts(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])

    return (
        <div>
            <h3>Total Posts - {posts.length}</h3>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Posts