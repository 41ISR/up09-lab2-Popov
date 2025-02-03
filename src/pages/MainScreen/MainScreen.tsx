import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat/Chat"
import "./MainScreen.css"

const MainScreen = () => {
    return(
        <div className="MainScreen">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default MainScreen;