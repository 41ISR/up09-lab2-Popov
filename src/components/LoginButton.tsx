import { useNavigate } from "react-router-dom";

const LoginButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/chat');
    };

    return(
        <input type="submit" value={'Войти'} onClick={handleClick}></input>
    );
};

export default LoginButton;