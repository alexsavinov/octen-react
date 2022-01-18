import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Userdetails from "./components/Userdetails/Userdetails";

function App() {
    return (
        <div className="App">
            <div className="top">
                <Users/>
                <Userdetails/>
            </div>
            {/*<Posts/>*/}
        </div>
    );
}

export default App;
