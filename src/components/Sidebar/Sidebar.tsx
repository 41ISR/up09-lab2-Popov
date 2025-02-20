import "./Sidebar.css";
import userPic from "../../assets/akashi-anon.png";

import { useEffect, useState } from "react";

const socket = io("http://localhost:3000", {
    withCredentials: true,
    transports: ["websocket", "polling"],
})

const Sidebar = ({ userID }: { userID: string }) => {

    const [activeTab, setActiveTab] = useState<"chats" | "users">("chats")
    const [activeChats, setActiveChats] = useState<string[]>([])
    const { users, setUsers } = useUserStore()
    const { messages } = useMessageStore()

    useEffect(() => {
        socket.on("users", (newUsers) => {
            setUsers(newUsers)
        })

        return () => {
            socket.off("users")
        }
    }, [setUsers])

    useEffect(() => {
        setActiveChats([...new Set(messages.map((msg) => msg.from))])
    }, [messages])

    return (
        <div className="Sidebar">
            <div className="vkladki">
                <button onClick={() => setActiveTab("chats")}>чаты</button>
                <button onClick={() => setActiveTab("users")}>контакты</button>
            </div>

            <div className="user-profile">
                <img src={userPic} />
                <p>{userID}</p>
            </div>
            <div className="Sidebar-chat">
                {activeTab === "chats" ? (
                    <div>
                        <p>Серега Пират</p>
                    </div>
                ) : (
                    <div>
                        <p>Перега Сират</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;

