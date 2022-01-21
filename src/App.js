import {Routes, Route} from 'react-router-dom';

import {Layout} from "./components";
import {UsersPage, PostsPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
