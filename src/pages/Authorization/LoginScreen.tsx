import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserStore } from '../../shared/zustandStore/UserStore';
import { URLs } from '../../app/router/URL';
import Input from '../Authorization/LoginInput'
import Api from '../../app/api/api';
import "./LoginScreen.css";

const LoginScreen = () => {
    const [userIDValue, setUserIDValue] = useState<string>('');
    const navigate = useNavigate();
    const {setUserID} = UserStore();


    const handleClick = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        try {
            const res = await Api.login(userIDValue.trim());
            setUserID(res.id);
            navigate(URLs.CHAT);
          } catch (error) {
            console.error("Login error:", error);
          }
    }

    return (
        <div className="LoginScreen-body">
            <h1>ЭКРАН ВХОДА ЗДЕСЬ</h1>
            <div className="login-card">
                <form onSubmit={handleClick}>
                    <Input value={userIDValue} setValue={setUserIDValue} />
                    <button type='submit'>Входим..</button>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
