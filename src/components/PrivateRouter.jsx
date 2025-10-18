import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    if(!user){
        
        return <Navigate to='/login'></Navigate>
    }

    
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default PrivateRouter;