import "./Sidebar.css"
import { Link } from "react-router-dom";
import userPic from "../../assets/akashi-anon.png"

const Sidebar = ({userID}:{userID:string}) => {
    return (
        <div className="Sidebar">
            <div className="vkladki">
                <Link to={''}>чаты</Link>
                <Link to={''}>контакты</Link>
            </div>
            <div className="user-profile">
                <img src={userPic} />
                <p>{userID}</p>
            </div>
            <div className="Sidebar-chat">
            {/* {isChats ? (
                    <></>
                ) : (

                )} */}
            </div>
        </div>
    );
};

export default Sidebar;

