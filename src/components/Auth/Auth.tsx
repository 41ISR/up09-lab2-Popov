import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { URLs } from "../../app/URL";
import { UserStore } from "../../shared/zustandStore/UserStore"

const Auth = () => {
    const {userID} = UserStore();
    const navigate = useNavigate();

    useEffect(() => {
      if (!userID) {
            navigate(URLs.LOGIN)
        }
        }, []);
    return(
        <Outlet />  
    );
};

export default Auth;