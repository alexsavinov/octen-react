import {Routes, Route, Navigate} from 'react-router-dom';

import {Layout} from "./components";
import {CarsPage, CommentsPage, PostsPage, UsersPage} from "./pages"

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>

            </Route>
        </Routes>
    );
};

export default App;
