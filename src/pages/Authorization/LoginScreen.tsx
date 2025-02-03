import LoginButton from "../../components/LoginButton";
import "./LoginScreen.css"

const LoginScreen = () => {
    return(
        <>
        <div className="LoginScreen-body">
            <h1>ЭКРАН ВХОДА ЗДЕСЬ</h1>
            <div className="login-card">
                <form action="">
                    <input type="text" placeholder="введите ваш ID"></input>
                    <LoginButton />
                </form>
            </div>
        </div>
        </>
    );
};

export default LoginScreen;
