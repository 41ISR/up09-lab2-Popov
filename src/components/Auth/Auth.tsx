import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { URLs } from "../../app/router/URL";
import { UserStore } from "../../shared/zustandStore/UserStore"

const Auth = () => {
    const {userID} = UserStore();
    const navigate = useNavigate();

    useEffect(() => {
      if (!userID) {
            navigate(URLs.LOGIN)
        }
        }, [navigate, userID]);
    return(
        <Outlet />  
    );
};

export default Auth;