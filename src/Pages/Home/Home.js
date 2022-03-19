import { useReducedMotion } from 'framer-motion';
import React from 'react';
import { useUserContext } from '../../Services/Context/UserContext';

function Home() {
    const { user, logOutUser } = useUserContext();

    return (
        <div>
            {user?.displayName}
            <button onClick={() => logOutUser()}>LogOut</button>
        </div>
    );
}

export default Home;
