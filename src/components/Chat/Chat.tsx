import "./Chat.css"
import ChatTextInput from "./ChatTextInput";

const Chat = () => {
    return (
            <div className="Chat">
                <div className="ChatMessages">
                    <h1>ЧАТ ЗДЕСЬ</h1>
                </div>
                <div className="Message">
                    <ChatTextInput />
                </div>
            </div>
    );
};

export default Chat;