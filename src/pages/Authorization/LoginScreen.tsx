import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserStore } from '../../shared/zustandStore/UserStore';
import { URLs } from '../../app/URL';
import "./LoginScreen.css";

const LoginScreen = () => {
    const [userID, setUserID] = useState<string>('');
    const navigate = useNavigate();
    const setZustandUserID = UserStore(state => state.setUserID);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (userID.trim() !== '') {
            setZustandUserID(userID);
            navigate(URLs.CHAT);

        } else {
            alert('Пожалуйста, введите ID пользователя.');
        }
    };

    return (
        <div className="LoginScreen-body">
            <h1>ЭКРАН ВХОДА ЗДЕСЬ</h1>
            <div className="login-card">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="введите ваш ID"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                        name="userID"
                    />
                    <button>Входим..</button>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
