import "./LoginScreen.css"
import { useState } from 'react';

const LoginScreen = () => {
    const [userID, setUserID] = useState('');
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement; 
        const newUserId = form.userID.value; 

        if (newUserId.trim() !== '') {
            setUserID(newUserId);
        }
    };
    return(
        <>
        <div className="LoginScreen-body">
            <h1>ЭКРАН ВХОДА ЗДЕСЬ</h1>
            <div className="login-card">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="введите ваш ID" 
                    value = {userID}
                    onChange = {e => setUserID(e.target.value)}
                    name="userID"/>
                    <button onClick={ () =>{ setUserID }}>Входим..</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default LoginScreen;
