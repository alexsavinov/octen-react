import {useLocation} from "react-router-dom";

const UserPostsPage = () => {
    const {state} = useLocation();
    console.log('const {state} = useLocation(); ', state);
    return (
        <div>
            UserPostsPage
        </div>
    );
};

export {UserPostsPage};