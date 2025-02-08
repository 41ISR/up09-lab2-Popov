import "./Sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="vkladki">

                <Link to={''}>чаты</Link>
                <Link to={''}>контакты</Link>
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

