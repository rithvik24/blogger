import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostsShow = (props) => {
    const {id} = props.match.params
    const [user, setUser] = useState({})
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    // console.log(user)
    // console.log(post)
    // console.log(comments)

    const userId = post.userId
    // console.log(userId)

    useEffect(() => {
        axios.get((`https://jsonplaceholder.typicode.com/posts/${id}`))
        .then((response) => {
            const result = response.data
            setPost(result)
        })
        .catch((err) => {
            alert(err.message)
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => {
            const result = response.data
            setComments(result)
        })
        .catch((err) => {
            alert(err.message)
        })

        if(userId){
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
            const result = response.data
            setUser(result)
        })
        .catch((err) => {
            alert(err.message)
        })
        }
        
    },[userId])

    return (
        <div>
            <h3>User name : {user.name} </h3>
            <h3>Title : {post.title} </h3>
            <h3>Body: <p>{post.body} </p></h3>

            <hr/>
                <h3>Comments</h3>
                <ul>
                    {
                        comments.map((comment) => {
                            return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul>
            <hr/>
            <Link to={`/user/${userId}`}>More posts by {user.name}</Link>
        </div>
    )
}

export default PostsShow