import {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import {postService} from "./services/post.service";


function App() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUser = (user) => {
        setUser(user);
        setPosts([]);
    };

    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts([...value]));
    };

    return (
        <div className="App">
            <div className="top">
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {/*{!!posts && <Posts posts={posts}/>}*/}
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
}

export default App;
