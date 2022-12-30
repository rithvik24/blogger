import React from "react";
import {Link, Route} from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users'
import Posts from './Components/Posts'
import UserShow from "./Components/UserShow";
import PostsShow from "./Components/PostsShow";

const App = (props) => {

    return (
        <div>
            <h1>Blog ui</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
            </ul>

            <Route path='/' component={Home} exact = {true}/>
            <Route path='/users' component={Users} />
            <Route path='/posts' component={Posts}/>
            <Route path='/user/:id' component = {UserShow}/>
            <Route path= '/post/:id' component = {PostsShow}/>
        </div>
    )
}

export default App