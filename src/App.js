import {Routes, Route} from 'react-router-dom';

import {Layout} from "./components";
import {UsersPage, PostsPage, PostDetailsPage} from "./pages";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}/>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}/>
                </Route>

            </Route>
        </Routes>
    );
}

export default App;
