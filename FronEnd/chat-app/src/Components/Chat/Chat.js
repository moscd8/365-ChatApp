import SendMessageForm from '../SendMessageForm/SendMessageForm';
import MessageContainer from '../MessageContainer/MessageContainer';
import ConnectedUsers from '../ConnectedUsers/ConnectedUsers';
import './Chat.css';

const Chat = ({ sendMessage, messages, users, closeConnection }) => 
{
    return(
    <div className="Chat">
    <div className="leave-room">
        <button variant='danger' onClick={() => closeConnection()}>Leave Room</button>
    </div>

    <div className="ConnectedUsers">
        <ConnectedUsers users={users} />
    </div>

   
    <div className="chat">
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </div>
</div>
)}

export default Chat;