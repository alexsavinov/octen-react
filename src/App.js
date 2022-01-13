import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className="App">
            <div className="top">
                <div className="users"><Users/></div>
                <div className="posts"><Posts/></div>
            </div>
            <div className="comments"><Comments/></div>
        </div>
    );
}

export default App;
