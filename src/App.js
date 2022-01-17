import css from './App.module.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import {userService} from "./services/user.service";
import Userdetails from "./components/Userdetails/Userdetails";

function App() {
    return (
        <div className={css.App}>
            <div className={css.top}>
                <Users/>
                <Posts/>
            </div>
            <Userdetails/>
        </div>
    );
}

export default App;
